import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/auth">Войти</Link>

      <p>Home page</p>
    </main>
  )
}
