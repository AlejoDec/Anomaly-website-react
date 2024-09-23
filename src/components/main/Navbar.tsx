import { Link } from '../../main/Link';
import '../styles/Navbar.css';
import { useEffect } from 'react';

export default function Navbar() {
    const navItems: {label: string, path: string}[] = [
        { label: 'Inicio', path: '/' },
        { label: 'Nosotros', path: '/about' },
        { label: 'Contacto', path: '/contact' },
        { label: 'Servicios', path: '/services' }
        // { label: 'Blog', path: '/blog' }
    ]

    useEffect(() => {
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
    }, []);

    return (
        <div className="w-screen flex justify-center">
            <nav className="w-4/5 max-h-16 flex justify-between aling-center px-6 py-2 text-white gap-12">
                <img src="/anomaly-image/logo-morado.svg" alt="Logo-Anomaly" className="logoImga w-44 h-auto"/>
                <ul className="flex py-0.5 px-3 justify-center items-center gap-7 rounded-full list-none w-2/4 max-sm:w-screen max-sm:rounded-none max-sm:gap-0">
                    {
                        Object.entries(navItems).map(([key, item]) => (
                            <li className="listContainer my-4 max-sm:my-0" key={key}>
                                <Link to={item.path} className="listStyle">{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="menu-container hidden w-full h-full flex items-center menu">
                    <img src="/anomaly-image/hamburger.png" alt="Menu" className="w-8 h-auto z-100"/>
                </div>
                <div className="cta-container flex items-center rounded-xl p-2">
                    <a href="/contact" className="callToAction flex w-40 h-7 p-3.5 justify-center items-center gap-2.5 rounded-lg font-normal border bg-purple-500 bg-opacity-40 inset-box-shadow text-light-color no-underline backdrop-filter blur-7">Contactanos</a>
                </div>
            </nav>
        </div>
    )
}