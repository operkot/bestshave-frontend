import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'

export function Toolbar() {
  return (
    <div className="flex gap-6 max-lg:fixed max-lg:bottom-0 max-lg:inset-x-0 max-lg:justify-between max-lg:bg-bgc-dark max-lg:p-4">
      <Link href="/search" className="transition-colors hover:text-primary">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </Link>
      <Link href="/profile" className="transition-colors hover:text-primary">
        <UserIcon className="w-6 h-6" />
      </Link>
      <Link href="/cart" className="transition-colors hover:text-primary">
        <ShoppingBagIcon className="w-6 h-6 " />
      </Link>
    </div>
  )
}
