import Navbar from './components/main/Navbar'
import BackToTop from './components/general/BackToTop';
import Hero from './components/Hero';
import InfinityScroll from './components/general/InfinityScroll';
import Servicios from './components/Servicios';
import Hese from './components/general/Hese';
import Socios from './components/Socios';
import Footer from './components/main/Footer';

import './styles/App.css'

export default function App() {
  return (
    <main className='w-screen flex flex-col justify-center items-center overflow-x-hidden scroll-smoth'>
      <Navbar />
      <BackToTop />
      <Hero />
      <InfinityScroll />
      <Servicios />
      <Hese />
      <Socios />
      <Footer />
    </main>
  )
}
