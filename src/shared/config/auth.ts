import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import api from '../api'

export const AUTH_CONFIG: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials == null) return null

        try {
          const { user, jwt } = await api.auth.signin({
            email: credentials.email,
            password: credentials.password,
          })
          return { ...user, jwt }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.jwt = token.jwt
      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false
      if (isSignIn) token.jwt = user.jwt
      return Promise.resolve(token)
    },
  },
  pages: {
    signIn: '/auth',
  },
}
