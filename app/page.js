import Image from 'next/image'
import FeatureSection from './components/feature-section'
import Testimonials from './components/testimonials'

export default function Home() {
  return (
    <main>
      <FeatureSection />
      <Testimonials />
    </main>
  )
}
