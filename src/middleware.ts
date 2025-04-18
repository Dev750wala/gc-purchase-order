import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = {
    matcher: [
        // Protected routes that require authentication
        '/dashboard/:path*',
        '/profile/:path*',
        '/users/:path*',
        '/api/users/:path*',
        '/api/purchase-orders/:path*',
    ],
}