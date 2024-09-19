import Navbar from "../main/Navbar";
import BackToTop from "../general/BackToTop";
import Miembro from "../about/Miembro";
import CallToAction from "../general/CallToAction";
import Footer from "../main/Footer";
import '../styles/About.css';

export default function About() {

    return (
        <main className='w-screen flex flex-col justify-center items-center overflow-x-hidden scroll-smooth'>
            <Navbar />
            <BackToTop />
            <div className="main-container flex flex-col items-center justify-center">
                <section className="w-[90vw] flex py-16 px-6 gap-4 justify-center firstSection">
                    <div className="text-container w-2/4 h-full p-10 gap-16 flex flex-col items-center justify-center rounded-xl">
                        <div className="flex flex-col gap-4">
                        <h1 className="text-stone-300 text-4xl text-bold text-center">¿Quienes somos?</h1>
                        <p className="text-stone-300 text-xl text-center">
                            Somos un grupo de jóvenes apasionados por la tecnología, que
                            buscan innovar y crear soluciones digitales para el mundo.
                        </p>
                        </div>
                        <div className="flex flex-col gap-4">
                        <h2 className="text-stone-300 text-4xl text-center">¿Como lo hacemos?</h2>
                        <p className="text-stone-300 text-xl text-center">
                            Nuestro equipo está conformado por desarrolladores, diseñadores y
                            especialistas en marketing digital, que trabajan en conjunto para
                            crear productos digitales de calidad.
                            Usamos la metodologia Scrum para organizar nuestro trabajo y poder
                            garantizarle a cada cliente un proyecto de alta calidad.
                        </p>
                        </div>
                    </div>
                    <div className="images-container w-2/4 h-[680px] flex gap-2">
                        <div className=" w-[25vw] flex flex-col justify-center items-center gap-2">
                        <img src="/about/image-1.jpeg" alt="anomaly" className="imgEdit w-full rounded-xl" />
                        <div className="flex gap-2">
                            <img src="/about/image-2.jpeg" alt="anomaly" className="primero-bento w-2/4 rounded-xl" />
                            <img src="/about/image-3.jpeg" alt="anomaly" className="primero-bento w-2/4 rounded-xl" />
                        </div>
                        </div>
                        <div className="segundo-bento w-[25vw] flex flex-col justify-center items-center gap-2">
                        <div className="flex gap-2">
                            <img src="/about/image-4.jpeg" alt="anomaly" className="w-2/4 rounded-xl" />
                            <img src="/about/image-5.jpeg" alt="anomaly" className="w-2/4 rounded-xl" />
                        </div>
                        <img src="/about/image-6.jpeg" alt="anomaly" className="w-full rounded-xl" />
                        </div>
                    </div>
                </section>
                <section className="cards-miembros w-screen flex items-center px-8">
                <div className="miembros-container w-2/4 grid grid-cols-3 gap-4 items-center py-8">
                    <div className="text-style w-full h-full flex flex-col items-center justify-center p-4 rounded-xl">
                    <h4 className="text-stone-300 text-4xl font-bold text-center">Conoce al equipo</h4>
                    </div>
                    <Miembro />
                </div>
                <div className="text-container-miembros w-2/4 h-full p-12">
                    <div className="gap-3 flex flex-col bgEdit rounded-xl p-6 h-full">
                    <h3 className="text-stone-300 text-4xl font-bold">Hola gente somos <span className="text-5xl">ANOMALY</span></h3>
                    <p className="text-stone-300 text-xl">
                        Somos un equipo con raices en Medellin, que ha evolucionado y se ah expandido a diversas ciudades de Colombia, y que ahora tiene la ambicion de alcanzar mercados internacionales. En Anomaly, nos enorgullece nuestra dedicacion a convertirnos en referentes en el ambito del marketing digtial y el desarrollo web. <br />
                        Nuestro compromiso es acompañar a las empresa en su transicion al mundo digital, ayudandolas a construir una identidad virtual solida y a mejorar su rendimiento en linea. Ofrecemos soluciones personalizadas para cada negocio, adaptandonos a sus necesidades especificas y brindando un soporte continuo para asegurar su exito en el entorno digital en constante evolucion. Trabajamos con pasion y profesionalismo para garantizar que nuestros clientes no solo se adapten, sino que prosperen en el competitivo mundo digital.
                    </p>
                    </div>
                </div>
                </section>
                <section className="cta-contact flex flex-col items-center justify-center">
                <div className="bgcont w-[90vw] h-[60vh] flex flex-col items-center justify-center gap-4 p-4 rounded-xl">
                    <h3 className="text-stone-300 text-4xl text-center">Ya que nos conoces, ¿quieres trabajar con nosotros?</h3>
                    <CallToAction href="/contact" text="¿Quieres que trabajemos juntos?" className="text-stone-800 p-2 text-xl hover:text-white" />
                </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}