import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
    </main>
  )
}
