import Link from 'next/link'
import { MAIN_MENU_LINKS } from './config'

export function MainMenu() {
  return (
    <nav className="max-lg:hidden flex items-center gap-6 ml-auto">
      {MAIN_MENU_LINKS.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="uppercase text-sm leading-none tracking-wide transition-colors hover:text-primary "
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}
