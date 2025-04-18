import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            email: string
            name: string | null
            phoneNumber: number | null
            empId: string | null
            role: string | null
        }
    }
} 