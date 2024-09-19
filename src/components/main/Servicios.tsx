import Card1 from '../services/Card1';
import Card2 from '../services/Card2';
import '../styles/Servicios.css';

export default function Servicios() {
    return (
        <div className="flex px-20 py-12 items-center gap-4 h-full w-full overflow-hidden" id="servicios">
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-stone-300 text-center text-6xl not-italic font-base leading-20 tracking-widest">SERVICIOS</h2>
                <p className="text-stone-300 text-center text-3xl not-italic font-light leading-8">Nos esforzamos por ofrecer soluciones que rompen con lo convencional. No nos limitamos a ofrecer un servicio estándar; en su lugar, nos enfocamos en crear estrategias personalizadas que se alinean con las necesidades y metas específicas de cada cliente. Nuestro compromiso es obtener resultados sobresalientes, respaldados por un enfoque creativo y una ejecución impecable, que aseguren el éxito en cada proyecto que desarrollamos.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="cardsContainer flex items-start gap-2">
                    <div>
                        <Card1 title="Marketing Digital" description="Le damos identidad a tu marca/negocio en las redes sociales" image="/servicios/servicios-1.png"/>
                    </div>
                    <div>
                        <Card2 title="Desarrollo web" description="Digitalizamos tu negocio y le damos un toque sutil" image="/servicios/desarrollo_web.jpeg" />
                    </div>
                </div>
                <div className="cardsContainer flex items-start gap-3">
                    <div>
                        <Card2 title="Diseño" description="Diseñamos tus ideas y las volvemos unicas" image="/servicios/graph-design.png"/>
                    </div>
                    <div>
                        <Card1 title="Estrategia SEO" description="Ayudamos a posicionar tu negocio" image="https://assets.entrepreneur.com/content/3x2/2000/1407799223-1-advanced-webmaster-tools-should-using-better-seo.jpg"/>                
                    </div>
                </div>
            </div>
        </div>
    )
}