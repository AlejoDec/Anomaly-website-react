import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        { label: <FormattedMessage id="navbar.services" defaultMessage='Servicios' />, path: '/services' },
        // { label: <FormattedMessage id="navbar.blog" defaultMessage='Blog' />, path: 'https://blog.anomalystudio.com.co' }
    ]

    const language = useContext(langContext);

    useEffect(() => {
        const handleResize = () => {
            const menuButton = document.querySelector('.menu') as HTMLElement | null;
            const ulButton = document.querySelectorAll('.listStyle');
            const ul = document.querySelector('ul') as HTMLElement | null;
            const langBtns = document.querySelectorAll('.langBtn') as NodeListOf<HTMLElement>;

            const handleMenuClick = () => {
                if (ul && menuButton && langBtns) {
                    ul.style.left = '0';
                    menuButton.style.display = 'none';
                    langBtns.forEach((btn, index) => {
                        btn.style.left = `${index * 50}px`;
                    });
                    console.log('click');
                }
            };

            const handleUlButtonClick = () => {
                if (ul && menuButton && langBtns) {
                    ul.style.left = '-100%';
                    menuButton.style.display = 'flex';
                    langBtns.forEach(btn => btn.style.left = '-100%');
                    console.log('hidde');
                }
            };

            if (window.innerWidth <= 450) {
                menuButton?.addEventListener('click', handleMenuClick);
                ulButton.forEach((button) => {
                    button.addEventListener('click', handleUlButtonClick);
                });
                langBtns.forEach((btn) => {
                    btn.addEventListener('click', handleUlButtonClick);
                });
            } else {
                menuButton?.removeEventListener('click', handleMenuClick);
                ulButton.forEach((button) => {
                    button.removeEventListener('click', handleUlButtonClick);
                });
                langBtns.forEach((btn) => {
                    btn.removeEventListener('click', handleUlButtonClick);
                });
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="flex justify-center">
            <nav className="flex justify-between aling-center px-6 py-2 text-white gap-12 max-sm:justify-center max-sm:items-center max-sm:flex-start">
                <Link to="/">
                    <LazyLoadImage src="/anomaly-image/logo-morado-navbar.svg" alt="Logo-Anomaly" className="logoImga h-full" width={'87px'} height={'47px'}/>
                </Link>
                <ul className="flex py-0.5 px-3 justify-center items-center gap-7 rounded-full list-none w-2/4 max-sm:w-screen max-sm:rounded-none max-sm:gap-0 ul-style">
                    {
                        Object.entries(navItems).map(([key, item]) => (
                            <li className="listContainer my-4 max-sm:my-0" key={key}>
                                {item.path.startsWith('http') ? (
                                    <a href={item.path} className="listStyle" onClick={ToTop} rel="noopener noreferrer">{item.label}</a>
                                ) : (
                                    <Link to={item.path} className="listStyle" onClick={ToTop}>{item.label}</Link>
                                )}
                            </li>
                        ))
                    }
                </ul>
                <div className="menu-container hidden w-full flex items-center menu">
                    <LazyLoadImage src="/anomaly-image/hamburger.webp" alt="Menu" className="z-100" width={'32px'} height={'32px'}/>
                </div>
                <div className='text-stone-300 flex gap-4 max-sm:flex-col max-sm:items-start'>
                    <button onClick={() => language?.setLanguage('es')} className='langBtn'>
                        <LazyLoadImage src="/languages/spain.webp" alt="spain" width={'24px'} height={'24px'} />
                    </button>
                    <button onClick={() => language?.setLanguage('en')} className='langBtn'>
                        <LazyLoadImage src="/languages/united-kingdom.webp" alt="united-kingdom" width={'24px'} height={'24px'} />
                    </button>
                </div>
                <div className="cta-container flex items-center rounded-xl p-2">
                    <Link to="/contact/" className="callToAction flex w-40 h-7 p-3.5 justify-center items-center gap-2.5 rounded-lg font-normal border bg-purple-500 bg-opacity-40 inset-box-shadow text-light-color no-underline backdrop-filter blur-7"><FormattedMessage id="navbar.cta" defaultMessage='Contactanos' /></Link>
                </div>
            </nav>
        </header>
    )
}