import Navbar from '../main/Navbar';
import InfinityScroll from '../general/InfinityScroll';
import BackToTop from '../general/BackToTop';
import Footer from '../main/Footer';
import '../styles/Services.css';

export default function Services() {
    return (
        <main className='w-screen max-sm:w-screen overflow-x-hidden'>
            <Navbar />
            <h1 className='text-4xl text-stone-300 text-center font-base py-8'>Servicios</h1>
            <BackToTop />
            <InfinityScroll />
            <div className='grid grid-cols-4 gap-4 items-center justify-center max-sm:grid-cols-1 overflow-x-hidden'>
                <div className='flex flex-col w-full p-4'>
                    <h2 className='text-3xl text-stone-300 text-center font-base'>Desarrollo Web</h2>
                    <p className='text-lg text-stone-300 text-center font-base'>Desarrollo de aplicaciones web a la medida, con tecnologías como React, Vite, Astro, WordPress, entre otras.</p>
                </div>
                <div className='flex flex-col w-full p-4'>
                    <h2 className='text-3xl text-stone-300 text-center font-base'>Desarrollo Móvil</h2>
                    <p className='text-lg text-stone-300 text-center font-base'>Desarrollo de aplicaciones móviles a la medida.</p>
                </div>
                <div className='flex flex-col w-full p-4'>
                    <h2 className='text-3xl text-stone-300 text-center font-base'>Diseño Web</h2>
                    <p className='text-lg text-stone-300 text-center font-base'>Diseño de interfaces web, con tecnologías como Figma, Adobe XD, Sketch, entre otras.</p>
                </div>
                <div className='flex flex-col w-full p-4'>
                    <h2 className='text-3xl text-stone-300 text-center font-base'>Marketing Digital</h2>
                    <p className='text-lg text-stone-300 text-center font-base'>Creación de contenido, calendario de publicaciones, organizacion de cuentas.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}