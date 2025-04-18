'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { SignOutButton } from './auth/sign-out-button'

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="text-xl font-bold text-gray-900">
                                User Management
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {session ? (
                            <>
                                <span className="text-sm text-gray-700">
                                    Welcome, {session.user.name || session.user.email}
                                </span>
                                <SignOutButton />
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/login"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href="/auth/register"
                                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
} 