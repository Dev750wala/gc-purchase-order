import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compare } from 'bcryptjs'
import { AuthOptions } from 'next-auth'
import db from '@/lib/db'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await db.user.findUnique({
                    where: { email: credentials.email }
                })

                if (!user || !user.password) {
                    return null
                }

                const isValid = await compare(credentials.password, user.password)

                if (!isValid) {
                    return null
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    phoneNumber: user.phoneNumber.toString(),
                    empId: user.empId,
                    isAdmin: user.isAdmin,
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.id = user.id
                token.phoneNumber = user.phoneNumber
                token.empId = user.empId
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }: { session: any; token: any }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.phoneNumber = token.phoneNumber as string
                session.user.empId = token.empId as string
                session.user.isAdmin = token.isAdmin as boolean
            }
            return session
        },
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
}
