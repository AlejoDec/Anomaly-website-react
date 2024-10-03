import { FormattedMessage } from 'react-intl';
import '../styles/Services.css';

export default function Services() {
    return (
        <main className='w-screen max-sm:w-screen overflow-x-hidden'>
            <h1 className='hidden'>
                <FormattedMessage id='services.titlePage' defaultMessage='Servicios' />
            </h1>
            <div className='flex flex-col py-12 container'>
                <section className='flex justify-between h-[10vh] py-2 max-sm:flex-col max-sm:h-full max-sm:gap-4'>
                    <div className='flex flex-start max-sm:flex-col'>
                        <h3 className='text-stone-300 text-6xl text-center font-bold px-3 max-sm:p-0 max-sm:text-4xl'>
                            <FormattedMessage id='services.titleContent' defaultMessage='Nuestros servicios' />
                        </h3>
                    </div>
                </section>
                <section id='web' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>
                            <FormattedMessage id='services.web' defaultMessage='Desarrollo Web' />
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>
                                <FormattedMessage id='services.webContent' defaultMessage='Creamos sitios web funcionales y atractivos que ofrecen una experiencia de usuario excepcional. Ya sea un sitio informativo, una tienda online o una plataforma personalizada, nuestro equipo de desarrolladores transforma tus ideas en realidad.' />
                            </p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords"><FormattedMessage id='web.service1' defaultMessage='Diseño UI/UX' /></p>
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
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>
                            <FormattedMessage id='services.apps' defaultMessage='Desarrollo de Apps' />
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>
                                <FormattedMessage id='services.appsContent' defaultMessage='Diseñamos y desarrollamos aplicaciones móviles a medida para que tu negocio esté al alcance de tus clientes en todo momento. Desde aplicaciones de comercio electrónico hasta soluciones personalizadas para mejorar la productividad empresarial, nuestro equipo de expertos utiliza las últimas tecnologías para crear apps funcionales, intuitivas y seguras.' />
                            </p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">Android</p>
                                <p className="p-Keywords">iOS</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='marketing' className="flex flex-col py-2">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>
                            <FormattedMessage id='card1.title1' defaultMessage='Marketing Digital' />
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>
                                <FormattedMessage id='services.marketingContent' defaultMessage='Desarrollamos estrategias de marketing digital que maximizan tu alcance y atraen a tu público objetivo. Desde la gestión de redes sociales hasta campañas de publicidad online, te ayudamos a conectar con tus clientes de manera efectiva.' />
                            </p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords"><FormattedMessage id='marketing.service1' defaultMessage='Redes sociales' /></p>
                                <p className="p-Keywords">SEO</p>
                                <p className="p-Keywords">Email Marketing</p>
                                <p className="p-Keywords">Google Ads</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='diseño' className="flex flex-col">
                    <div className='flex flex-start'>
                        <h3 className='text-stone-300 text-[120px] font-bold max-sm:text-4xl'>
                            <FormattedMessage id='card2.title2' defaultMessage='Diseño Grafico' />
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                        <div className='w-[40vw] p-6 max-sm:w-full'>
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>
                                <FormattedMessage id='services.designContent' defaultMessage='Damos vida a tu marca con diseños creativos y profesionales. Desde logotipos y material publicitario hasta diseño de sitios web, nuestro equipo se asegura de que cada elemento visual refleje la personalidad de tu empresa.' />
                            </p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">
                                    <FormattedMessage id='design.service1' defaultMessage='Identidad' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='design.service2' defaultMessage='Marca' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='design.service3' defaultMessage='Publicidad' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='design.service4' defaultMessage='Editorial' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='design.service5' defaultMessage='Ilustración' />
                                </p>
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
                            <p className='text-stone-300 text-2xl explain max-sm:text-lg'>
                                <FormattedMessage id='services.seoContent' defaultMessage='Mejora tu posicionamiento en buscadores y atrae más tráfico orgánico a tu sitio web. Implementamos estrategias de SEO que aumentan la visibilidad de tu negocio y te colocan en los primeros resultados de búsqueda.' />
                            </p>
                        </div>
                        <div className='w-[45vw] p-12 max-sm:w-full'>
                            <div className='text-stone-300 text-2xl font-bold flex flex-col gap-4 list-container'>
                                <p className="p-Keywords">
                                    <FormattedMessage id='seo.service1' defaultMessage='Auditoria SEO' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='seo.service2' defaultMessage='Consultoria SEO' />
                                </p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='seo.service3' defaultMessage='Link building' />
                                </p>
                                <p className="p-Keywords">SEO On-Page</p>
                                <p className="p-Keywords">SEO Off-Page</p>
                                <p className="p-Keywords">
                                    <FormattedMessage id='seo.service4' defaultMessage='Analitica web' />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}