import { ProfileMenu } from '@/components/profile-menu'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ProfileMenu />
      {children}
    </>
  )
}
