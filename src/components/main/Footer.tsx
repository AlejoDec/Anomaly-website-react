import { Link } from 'react-router-dom';
import { ToTop } from '../general/ToTop';
import { FormattedMessage } from 'react-intl';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Footer() {

    const rutas = [
        { label: <FormattedMessage id='footer.home' defaultMessage='Inicio' />, path: '/' },
        { label: <FormattedMessage id='footer.about' defaultMessage='Nosotros' />, path: '/about' },
        { label: <FormattedMessage id='footer.services' defaultMessage='Servicios' />, path: '/services' },
        { label: <FormattedMessage id='footer.contact' defaultMessage='Contacto' />, path: '/contact' }
    ]

    return (
        <footer className='flex flex-col w-screen text-stone-300 shadow-custom-footer <-1 max-sm:items-center'>
            <div className='border-b-2 border-custom-pink flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'></div>
            <div className='border-b-2 border-custom-pink flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'>
                <div className='flex flex-col max-sm:items-center'>
                    <LazyLoadImage src="/anomaly-image/logo-morado-navbar.svg" alt="Anomaly-logo" />
                    <h2 className='font-bold text-[80px] max-sm:text-[20px] max-sm:text-center'>Anomaly</h2>
                    <p className='font-base text-lg max-sm:text-center'>
                        <FormattedMessage id='footer.txt1' defaultMessage='Agencia de desarrollo creativo' />
                    </p>
                </div>
                <div className='flex gap-4'>
                <div className='flex flex-col max-sm:text-center'>
                        <h3 className='font-bold'>
                            <FormattedMessage id='ul.title1' defaultMessage='Compañia' />
                        </h3>
                        <ul className='border-none flex flex-col'>
                            {
                                rutas.map((ruta, index) => (
                                    <li key={index}>
                                        <Link to={ruta.path} onClick={ToTop}>{ruta.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex flex-col max-sm:text-center'>
                        <h3 className='font-bold'>Legal</h3>
                        <div className='border-none'>
                            <FormattedMessage id='terms' defaultMessage='Terminos y servicios' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-20 p-8 max-sm:flex-col max-sm:gap-2 max-sm:items-center'>
                <div>
                    <p className='max-sm:text-center'>2024 © All Rights Reserved</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/anomalydigitalmarketing?igsh=MWdzNjVlcjZzNWN0Zg==" target='_blank'>
                        <LazyLoadImage src="/red-social/instagram.webp" alt="instagram" className='w-[27px] max-sm:w-[60px]' width="27px" height="27px" />
                    </a>
                </div>
            </div>
        </footer>
    )
}