import Hero from "../main/Hero"
import Servicios from "../main/Servicios"
import Hese from "../general/Hese"
import Text1 from "../general/Text1"
import Socios from "../main/Socios"

export default function HomePage() {
    return (
        <main className='w-screen flex flex-col justify-center items-center overflow-x-hidden scroll-smoth max-sm:mt-[20vh]'>
            <Hero />
            <Text1/>
            <Servicios />
            <Hese />
            <Socios />
        </main>
    )
}