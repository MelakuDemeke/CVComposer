import Features from '@/components/LandingPage/Features'
import Hero from '@/components/LandingPage/Hero'
import Stats from '@/components/LandingPage/Stats'
import Testimonials from '@/components/LandingPage/Testimonials'

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
