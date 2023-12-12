export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: `${params.slug.toUpperCase()} • Bestshave.ru`,
  }
}

export default function Brand({ params }: { params: { slug: string } }) {
  return (
    <main>
      <p>Brand page: {params.slug}</p>
    </main>
  )
}
