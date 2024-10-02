import { Link } from 'react-router-dom';
import { ToTop } from '../general/ToTop';
import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';
import '../styles/Navbar.css';

export default function Navbar() {
    const navItems: {label: React.ReactNode, path: string}[] = [
        { label: <FormattedMessage id="navbar.home" defaultMessage='Inicio' />, path: '/' },
        { label: <FormattedMessage id="navbar.about" defaultMessage='Nosotros' />, path: '/about' },
        { label: <FormattedMessage id="navbar.contact" defaultMessage='Contacto' />, path: '/contact' },
        { label: <FormattedMessage id="navbar.services" defaultMessage='Servicios' />, path: '/services' }
        // { label: <FormattedMessage id="navbar.blog" defaultMessage='Blog' />, path: '/blog' }
    ]

    const language = useContext(langContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 450) {
                const menuButton = document.querySelector('.menu') as HTMLElement | null;
                const ulButton = document.querySelectorAll('.listStyle');
                const ul = document.querySelector('ul') as HTMLElement | null;

                const handleMenuClick = () => {
                    if (ul && menuButton) {
                        ul.style.left = '0';
                        menuButton.style.display = 'none';
                        console.log('click');
                    }
                };

                const handleUlButtonClick = () => {
                    if (ul && menuButton) {
                        ul.style.left = '-100%';
                        menuButton.style.display = 'flex';
                        console.log('hidde');
                    }
                };

                menuButton?.addEventListener('click', handleMenuClick);
                ulButton.forEach((button) => {
                    button.addEventListener('click', handleUlButtonClick);
                });

                return () => {
                    menuButton?.removeEventListener('click', handleMenuClick);
                    ulButton.forEach((button) => {
                        button.removeEventListener('click', handleUlButtonClick);
                    });
                };
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-screen flex justify-center">
            <nav className="w-4/5 max-h-16 flex justify-between aling-center px-6 py-2 text-white gap-12">
                <Link to="/">
                    <img src="/anomaly-image/logo-morado-navbar.svg" alt="Logo-Anomaly" className="logoImga h-full"/>
                </Link>
                <ul className="flex py-0.5 px-3 justify-center items-center gap-7 rounded-full list-none w-2/4 max-sm:w-screen max-sm:rounded-none max-sm:gap-0 ul-style">
                    {
                        Object.entries(navItems).map(([key, item]) => (
                            <li className="listContainer my-4 max-sm:my-0" key={key}>
                                <Link to={item.path} className="listStyle" onClick={ToTop}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="menu-container hidden w-full h-full flex items-center menu">
                    <img src="/anomaly-image/hamburger.webp" alt="Menu" className="w-8 h-auto z-100"/>
                </div>
                <div className='text-stone-300 flex gap-4 max-sm:flex-col max-sm:items-start'>
                    <button onClick={() => language?.setLanguage('es')}>
                        <img src="/languages/spain.png" alt="spain" />
                    </button>
                    <button onClick={() => language?.setLanguage('en')}>
                        <img src="/languages/united-kingdom.png" alt="united-kingdom" />
                    </button>
                </div>
                <div className="cta-container flex items-center rounded-xl p-2">
                    <Link to="/contact" className="callToAction flex w-40 h-7 p-3.5 justify-center items-center gap-2.5 rounded-lg font-normal border bg-purple-500 bg-opacity-40 inset-box-shadow text-light-color no-underline backdrop-filter blur-7"><FormattedMessage id="navbar.cta" defaultMessage='Contactanos' /></Link>
                </div>
            </nav>
        </div>
    )
}