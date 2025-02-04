import { FormattedMessage } from 'react-intl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/Socios.css';

const clientes = [
    {
        id: 1,
        name: 'iLerne',
        image: '/socios/logo-ilerne.webp',
        url: 'https://ilerne.com'
    },
    {
        id: 2,
        name: 'Tu Tiempo',
        image: '/socios/tu-tiempo-logo.webp',
        url: 'https://www.instagram.com/tutiempobarberia/'
    }
]

export default function Socios() {
    return (
        <div className="w-screen h-screen overflow-hidden socios max-sm:h-[150vh]">
            <div className="css-selector flex flex-col justify-center items-center gap-5 w-full h-full shrink-0 -z-1 w-screen">
                <div className="w-[90%] flex flex-col justify-center items-center gap-5">
                <h2 className="text-stone-300 text-8xl self-start opacity-35 font-bold">
                    <FormattedMessage id='client.title' defaultMessage='CLIE' />
                </h2>
                <p className="text-stone-300 text-center text-4xl not-italic font-light leading-8">
                    <FormattedMessage id='client.txt' defaultMessage='Empresas que confian en nosotros y tomaron la mejor desicion' />
                </p><br />
                <div className="sociosContainer flex justify-center items-center gap-10">
                    {
                        clientes.map((socio, index )=> (
                            <a key={index} href={socio.url} target="_blank" className="sociosCard flex justify-center items-center shrink-0 rounded-md">
                                <LazyLoadImage src={socio.image} alt={socio.name} className="sociosImage w-1/2 shrink-0 opacity-50" />
                            </a>
                        ))
                    }
                </div>
                <h2 className="text-stone-300 text-8xl self-end opacity-35 font-bold">
                    <FormattedMessage id='client.title2' defaultMessage='NTES' />
                </h2>
                </div>
            </div>
        </div>
    )
}