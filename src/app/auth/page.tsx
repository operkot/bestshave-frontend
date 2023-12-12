import { Metadata } from 'next'

import { SigninForm } from '@/features/auth'

export const metadata: Metadata = {
  title: 'Авторизация • Bestshave',
}

export default function Auth() {
  return (
    <main>
      <h1 className="font-bold">Авторизация:</h1>

      <SigninForm />
    </main>
  )
}
