import { Logo } from '@/shared/ui'
import { Toolbar } from '@/features/toolbar'
import { MainMenu } from '@/features/main-menu'

export function Header() {
  return (
    <header className="sticky z-10 top-0 py-6 bg-bgc-dark text-textc-light">
      <div className="wrapper | flex items-center gap-10">
        <Logo />
        <MainMenu />
        <Toolbar />
      </div>
    </header>
  )
}
