import { Link } from 'react-router-dom';
import { ToTop } from '../general/ToTop';
import { FormattedMessage } from 'react-intl';
import '../styles/Footer.css';

export default function Footer() {

    const rutas = [
        { label: <FormattedMessage id='footer.home' defaultMessage='Inicio' />, path: '/' },
        { label: <FormattedMessage id='footer.about' defaultMessage='Nosotros' />, path: '/about' },
        { label: <FormattedMessage id='footer.services' defaultMessage='Servicios' />, path: '/services' },
        { label: <FormattedMessage id='footer.contact' defaultMessage='Contacto' />, path: '/contact' }
    ]

    return (
        
        <footer className='flex flex-col w-screen text-stone-300 max-sm:items-center'>
            <div className='footer-content-2 flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'></div>
            <div className='footer-content-2 flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'>
                <div className='flex flex-col max-sm:items-center'>
                    <img src="/anomaly-image/logoBlanco.webp" alt="Anomaly-logo" className='w-[75px]' />
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
                        <img src="/red-social/instagram.webp" alt="instagram" className='w-[27px] max-sm:w-[60px]' />
                    </a>
                </div>
            </div>
            
        </footer>
    )
}