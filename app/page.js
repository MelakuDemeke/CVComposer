import Features from '@/components/LandingPage/Features'
import Hero from '@/components/LandingPage/Hero'
import Stats from '@/components/LandingPage/Stats'
import Testimonials from '@/components/LandingPage/Testimonials'
import Team from '@/components/LandingPage/Team'
import FeaturesDetail from '@/components/LandingPage/FeaturesDetail'
import About from '@/components/LandingPage/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturesDetail />
      <About />
      
      <Testimonials />
      <Features />
    </main>
  )
}
