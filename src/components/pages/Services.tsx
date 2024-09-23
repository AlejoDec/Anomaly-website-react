import BackToTop from '../general/BackToTop';
import '../styles/Services.css';

export default function Services() {
    return (
        <main className='w-screen max-sm:w-screen overflow-x-hidden'>
            <h1 className='hidden'>Servicios</h1>
            <BackToTop />
            <div className='flex flex-col py-12 container'>
                <section className='flex justify-between h-[10vh] py-2 max-sm:flex-col max-sm:h-full max-sm:gap-4'>
                    <div className='flex flex-start max-sm:flex-col'>
                        <h3 className='text-stone-300 text-6xl text-center font-bold px-3 max-sm:p-0 max-sm:text-4xl'>Nuestros servicios</h3>
                    </div>
                </section>
                <section id='web' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>Desarrollo Web</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Creamos sitios web funcionales y atractivos que ofrecen una experiencia de usuario excepcional. Ya sea un sitio informativo, una tienda online o una plataforma personalizada, nuestro equipo de desarrolladores transforma tus ideas en realidad.</p>
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
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Diseñamos y desarrollamos aplicaciones móviles a medida para que tu negocio esté al alcance de tus clientes en todo momento. Desde aplicaciones de comercio electrónico hasta soluciones personalizadas para mejorar la productividad empresarial, nuestro equipo de expertos utiliza las últimas tecnologías para crear apps funcionales, intuitivas y seguras.</p>
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
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Desarrollamos estrategias de marketing digital que maximizan tu alcance y atraen a tu público objetivo. <br /> Desde la gestión de redes sociales hasta campañas de publicidad online, te ayudamos a conectar con tus clientes de manera efectiva.</p>
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
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Damos vida a tu marca con diseños creativos y profesionales. Desde logotipos y material publicitario hasta diseño de sitios web, nuestro equipo se asegura de que cada elemento visual refleje la personalidad de tu empresa.</p>
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
                <section id='seo' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>SEO</h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>Mejora tu posicionamiento en buscadores y atrae más tráfico orgánico a tu sitio web. Implementamos estrategias de SEO que aumentan la visibilidad de tu negocio y te colocan en los primeros resultados de búsqueda.</p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Auditoria SEO</p>
                                <p className="p-Keywords">Consultoria SEO</p>
                                <p className="p-Keywords">Analisis y reporting</p>
                                <p className="p-Keywords">SEO On-Page</p>
                                <p className="p-Keywords">SEO Off-Page</p>
                                <p className="p-Keywords">Analitica web</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}