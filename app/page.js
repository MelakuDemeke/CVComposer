import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Testimonials />
      <Features />
    </main>
  )
}
