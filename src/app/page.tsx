'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface User {
    id: string
    email: string
    name: string | null
    phoneNumber: number | null
    empId: string | null
    role: string | null
}

export default function HomePage() {
    const { data: session } = useSession()
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (session?.user.role === 'admin') {
            fetch('/api/users')
                .then(res => res.json())
                .then(data => setUsers(data))
                .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [session])

    if (!session) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Not authenticated</h1>
                    <p className="mt-2">Please sign in to view this page</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Welcome, {session.user.name || 'User'}!</h1>
                    <p className="text-gray-600">Role: {session.user.role}</p>
                </div>

                {session.user.role === 'admin' ? (
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-xl font-semibold">All Users</h2>
                        </div>
                        {loading ? (
                            <div className="p-4 text-center">Loading...</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Employee ID
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.role}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.empId}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{session.user.email}</p>
                            </div>
                            {session.user.phoneNumber && (
                                <div>
                                    <p className="text-sm text-gray-500">Phone Number</p>
                                    <p className="font-medium">{session.user.phoneNumber}</p>
                                </div>
                            )}
                            {session.user.empId && (
                                <div>
                                    <p className="text-sm text-gray-500">Employee ID</p>
                                    <p className="font-medium">{session.user.empId}</p>
                                </div>
                            )}
                            {session.user.role && (
                                <div>
                                    <p className="text-sm text-gray-500">Role</p>
                                    <p className="font-medium">{session.user.role}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
