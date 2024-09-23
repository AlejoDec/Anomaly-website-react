import Navbar from '../main/Navbar';
import BackToTop from '../general/BackToTop';
import Footer from '../main/Footer';
import '../styles/Services.css';

export default function Services() {
    return (
        <main className='w-screen max-sm:w-screen overflow-x-hidden'>
            <Navbar />
            <h1 className='hidden'>Servicios</h1>
            <BackToTop />
            <div className='flex flex-col py-12 container'>
                <section className='flex justify-between h-[50vh] py-2 max-sm:flex-col max-sm:h-full max-sm:gap-4'>
                    <div className='flex flex-start max-sm:flex-col'>
                        <h3 className='text-stone-300 text-6xl text-center font-bold px-3 max-sm:p-0 max-sm:text-xl'>Somos una agencia digital de multiservicios</h3>
                    </div>
                    <div className='flex flex-end max-sm:flex-col'>
                        <h3 className='text-stone-300 text-5xl text-center font-base px-3 flex items-end max-sm:p-0 max-sm:text-xl'>Nos apaciona el apoyar p nuestros clientes y llevarlos al proximo nivel</h3>
                    </div>
                </section>
                <section id='web' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[180px] font-base max-sm:text-4xl'>Desarrollo Web</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[45vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Le damos imagen p tu negocio en el mundo virtual, posicionamiento y te llevamos de la mano con cualquier necesidad</p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Diseño UI/UX</p>
                                <p className="p-Keywords">SEO</p>
                                <p className="p-Keywords">Blog</p>
                                <p className="p-Keywords">E-Commerce</p>
                                <p className="p-Keywords">Web App</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='apps' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>Desarrollo de Apps</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[45vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Desarrollamos aplicaciones moviles para cualquier necesidad, desde un pequeño negocio hasta una empresa grande</p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Android</p>
                                <p className="p-Keywords">iOS</p>
                                <p className="p-Keywords">Hibridas</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='marketing' className="flex flex-col py-2">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>Marketing Digital</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[45vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Te ayudamos p posicionar tu negocio en las redes sociales y en el mundo digital</p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Redes Sociales</p>
                                <p className="p-Keywords">SEO</p>
                                <p className="p-Keywords">Email Marketing</p>
                                <p className="p-Keywords">Google Ads</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='diseño' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>Diseño Grafico</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[45vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Diseñamos tu marca, le damos identidad al estilo como p ti te gusta</p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Identidad</p>
                                <p className="p-Keywords">Marca</p>
                                <p className="p-Keywords">Publicidad</p>
                                <p className="p-Keywords">Editorial</p>
                                <p className="p-Keywords">Ilustración</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}