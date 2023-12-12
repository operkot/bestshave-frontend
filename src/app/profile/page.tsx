import { Metadata } from 'next'
import { getServerSession } from 'next-auth'

import { AUTH_CONFIG } from '@/shared/config/auth'
import api from '@/shared/api'

export const metadata: Metadata = {
  title: 'Личный кабинет • Bestshave',
}

export default async function Profile() {
  const session: any = await getServerSession(AUTH_CONFIG)
  const user = await api.users.me(session?.jwt)

  return (
    <main>
      <p>Здравтсвуйте, {user?.username}</p>
      <p>email: {user?.email}</p>
    </main>
  )
}
