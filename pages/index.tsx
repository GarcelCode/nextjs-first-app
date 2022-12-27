import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>
        Ir a posts <Link href="/posts/first-post">Posts</Link>
      </h1>
    </>
  )
}
