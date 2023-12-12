import { getToken } from 'next-auth/jwt'
import { withAuth, type NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/profile/:path*', '/auth', '/register', '/reset-password'],
}
const PROTECTED_WHEN_AUTH = ['/auth', '/register', '/reset-password']

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuthenticated = !!token
  const { pathname } = req.nextUrl

  if (PROTECTED_WHEN_AUTH.some(r => pathname.startsWith(r))) {
    return isAuthenticated
      ? NextResponse.redirect(new URL('/profile', req.url))
      : NextResponse.next()
  }

  return await withAuth(req, {
    pages: {
      signIn: '/auth',
    },
  })
}
