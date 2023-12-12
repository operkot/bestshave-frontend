import NextAuth, { DefaultSession, User } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    jwt: string | unknown
    user: {} & DefaultSession['user']
  }

  interface User {
    jwt: (string | unknown) & User
  }
}
