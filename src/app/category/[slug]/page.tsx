export default function Category({ params }: { params: { slug: string } }) {
  return (
    <main>
      <p>Category page: {params.slug}</p>
    </main>
  )
}
