import BackToTop from "../general/BackToTop"
import Hero from "../main/Hero"
import InfinityScroll from "../general/InfinityScroll"
import Servicios from "../main/Servicios"
import Hese from "../general/Hese"
import Text1 from "../general/Text1"
import Socios from "../main/Socios"

export default function HomePage() {
    return (
        <main className='w-screen flex flex-col justify-center items-center overflow-x-hidden scroll-smoth'>
            <BackToTop />
            <Hero />
            <InfinityScroll />
            <Text1/>
            <Servicios />
            <Hese />
            <Socios />
        </main>
    )
}