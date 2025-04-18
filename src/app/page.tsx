'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
    const { data: session } = useSession()

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Welcome to Purchase Order System</h1>
                
                {session ? (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">User Information</h2>
                        <div className="space-y-2">
                            <p className="text-gray-600">Email: {session.user.email}</p>
                            <p className="text-gray-600">Name: {session.user.name || 'Not set'}</p>
                            <p className="text-gray-600">Employee ID: {session.user.empId}</p>
                            <p className="text-gray-600">Phone: {session.user.phoneNumber}</p>
                            <p className="text-gray-600">Admin: {session.user.isAdmin ? 'Yes' : 'No'}</p>
                        </div>

                        {session.user.isAdmin && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Admin Actions</h3>
                                <div className="space-x-4">
                                    <Link 
                                        href="/users" 
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Manage Users
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                            <div className="space-x-4">
                                <Link 
                                    href="/purchase-orders" 
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    View Purchase Orders
                                </Link>
                                <Link 
                                    href="/purchase-orders/new" 
                                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                                >
                                    Create New PO
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Please Sign In</h2>
                        <p className="text-gray-600 mb-4">
                            You need to sign in to access the purchase order system.
                        </p>
                        <Link 
                            href="/auth/login" 
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </main>
    )
}
