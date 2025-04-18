import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import db from '@/lib/db'

export async function POST(req: Request) {
    try {
        const { email, password, name, phoneNumber, empId } = await req.json()

        // Validate required fields
        if (!email || !password || !name || !phoneNumber || !empId) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            )
        }

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 }
            )
        }

        // Hash password
        const hashedPassword = await hash(password, 12)

        // Create user
        const user = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phoneNumber: BigInt(phoneNumber),
                empId,
                // isAdmin will be false by default
            },
        })

        // Remove password from response and convert BigInt to string
        const { password: _, ...userWithoutPassword } = {
            ...user,
            phoneNumber: user.phoneNumber.toString()
        }

        return NextResponse.json(
            { user: userWithoutPassword, message: 'User created successfully' },
            { status: 201 }
        )
    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status: 500 }
        )
    }
} 