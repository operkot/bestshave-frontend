import { getToken } from 'next-auth/jwt'
import { withAuth, type NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/profile/:path*', '/signin', '/signup', '/reset-password'],
}
const PROTECTED_WHEN_AUTH = ['/signin', '/signup', '/reset-password']

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  if (PROTECTED_WHEN_AUTH.includes(req.nextUrl.pathname)) {
    return isAuthenticated
      ? NextResponse.redirect(new URL('/profile', req.url))
      : NextResponse.next()
  }

  return await withAuth(req, {
    pages: {
      signIn: '/signin',
    },
  })
}
