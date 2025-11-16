import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import LogoCloud from './components/LogoCloud'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Stats />
      <Showcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
