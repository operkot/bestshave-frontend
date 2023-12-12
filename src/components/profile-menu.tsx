'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export function ProfileMenu() {
  return (
    <nav className="grid">
      <Link href="/profile">Мой кабинет</Link>
      <Link href="/profile/orders">Мои заказы</Link>
      <Link href="/profile/settings">Мои настройки</Link>
      <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
        Выйти
      </Link>
    </nav>
  )
}
