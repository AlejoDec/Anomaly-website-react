import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { ToTop } from '../general/ToTop';

export default function Footer() {

    const rutas = [
        { label: 'Inicio', path: '/' },
        { label: 'Nosotros', path: '/about' },
        { label: 'Servicios', path: '/services' },
        { label: 'Contacto', path: '/contact' }
    ]

    return (
        
        <footer className='flex flex-col w-screen text-stone-300 max-sm:items-center'>
            <div className='footer-content-2 flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'></div>
            <div className='footer-content-2 flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'>
                <div className='flex flex-col max-sm:items-center'>
                    <img src="/anomaly-image/logoBlanco.webp" alt="Anomaly-logo" className='w-[75px]' />
                    <h2 className='font-bold text-[80px] max-sm:text-[20px] max-sm:text-center'>Anomaly</h2>
                    <p className='font-base text-lg max-sm:text-center'>Agencia de desarrollo creativo</p>
                </div>
                <div className='flex gap-4'>
                <div className='flex flex-col max-sm:text-center'>
                        <h3 className='font-bold'>Compañia</h3>
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
                        <ul className='border-none'>
                            <a>Terminos de <br />servicios</a>
                        </ul>
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