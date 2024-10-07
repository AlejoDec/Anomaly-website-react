import { FormattedMessage } from 'react-intl';
import Card1 from '../services/Card1';
import Card2 from '../services/Card2';
import '../styles/Servicios.css';

export default function Servicios() {
    return (
        <div className="flex px-20 py-12 items-center gap-4 h-full w-full overflow-hidden servicios">
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-stone-300 text-center text-6xl not-italic font-base leading-20 tracking-widest">
                    <FormattedMessage id="services.title" defaultMessage="SERVICIOS" />
                </h2>
                <p className="text-stone-300 text-3xl not-italic font-light leading-8" style={{ whiteSpace: 'pre-line' }}>
                    <FormattedMessage id="services.txt" defaultMessage="Nos esforzamos por ofrecer soluciones que rompen con lo convencional. \n No nos limitamos a ofrecer un servicio estándar; en su lugar, nos enfocamos en crear estrategias personalizadas que se alinean con las necesidades y metas específicas de cada cliente. \n Nuestro compromiso es obtener resultados sobresalientes, respaldados por un enfoque creativo y una ejecución impecable, que aseguren el éxito en cada proyecto que desarrollamos."  />
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="cardsContainer flex items-start gap-2">
                    <div>
                        <Card1 title={<FormattedMessage id="card1.title1" defaultMessage="Marketing digital" />} description={<FormattedMessage id="card1.description1" defaultMessage="Le damos identidad a tu marca/negocio en las redes sociales" />} image="/servicios/servicios-1.webp"/>
                    </div>
                    <div>
                        <Card2 title={<FormattedMessage id="card2.title1" defaultMessage="Desarrollo web" />} description={<FormattedMessage id="card2.description1" defaultMessage="Digitalizamos tu negocio y le damos un toque sutil" />} image="/servicios/desarrollo-web.webp" />
                    </div>
                </div>
                <div className="cardsContainer flex items-start gap-3">
                    <div>
                        <Card2 title={<FormattedMessage id="card2.title2" defaultMessage="Diseño Grafico" />} description={<FormattedMessage id="card2.description2" defaultMessage="Diseñamos tus ideas y las volvemos unicas" />} image="/servicios/graph-design.webp"/>
                    </div>
                    <div>
                        <Card1 title={<FormattedMessage id="card1.title2" defaultMessage="Estrategia SEO" />} description={<FormattedMessage id="card1.description2" defaultMessage="Ayudamos a posicionar tu negocio" />} image="/servicios/seo.webp"/>                
                    </div>
                </div>
            </div>
        </div>
    )
}