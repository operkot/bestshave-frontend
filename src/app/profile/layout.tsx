import { ProfileMenu } from '@/entities/profile'

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
