import db from '@/lib/db'

async function createUser() {
    const user = await db.user.create({
        data: {
            email: 'john@example.com',
            name: 'John',
            phoneNumber: 1234567890,
            empId: '1234567890',
            role: 'admin',
            password: 'password',
        },
    })

    console.log('Created User:', user)
}


createUser()