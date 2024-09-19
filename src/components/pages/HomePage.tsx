import Navbar from "../main/Navbar"
import BackToTop from "../general/BackToTop"
import Hero from "../main/Hero"
import InfinityScroll from "../general/InfinityScroll"
import Servicios from "../main/Servicios"
import Hese from "../general/Hese"
import Socios from "../main/Socios"
import Footer from "../main/Footer"

export default function HomePage() {
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