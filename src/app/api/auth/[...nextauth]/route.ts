import NextAuth from 'next-auth/next'
import { AUTH_CONFIG } from '@/shared/config/auth'

const handler = NextAuth(AUTH_CONFIG)

export { handler as GET, handler as POST }
