import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import db from '@/lib/db'

export async function GET() {
    try {
        const session = await getServerSession(authOptions)

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            )
        }

        const users = await db.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                phoneNumber: true,
                empId: true,
                role: true,
            },
        })

        // Convert BigInt phoneNumber to string for each user
        const usersWithStringPhoneNumber = users.map(user => ({
            ...user,
            phoneNumber: user.phoneNumber.toString()
        }))

        return NextResponse.json(usersWithStringPhoneNumber)
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status: 500 }
        )
    }
} 