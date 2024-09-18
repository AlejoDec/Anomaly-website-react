import '../styles/Navbar.css';

export default function Navbar() {
    const navItems: {label: string, path: string}[] = [
        { label: 'Inicio', path: '/' },
        { label: 'Acerca', path: '/about' },
        { label: 'Contacto', path: '/views/Contacto' },
        { label: 'Servicios', path: '/services' }
    ]

    const menuButton = document.querySelector('.menu')
    const ulButton = document.querySelectorAll('.listStyle')

    menuButton?.addEventListener('click', () => {
        const ul = document.querySelector('ul')
        if (ul !== null) {
            ul.style.left = '0'
        }
    })
    ulButton.forEach((button) => {
        button.addEventListener('click', () => {
            const ul = document.querySelector('ul')
            if (ul !== null) {
                ul.style.left = '100%'
            }
        })
    })

    return (
        <div className="w-screen flex justify-center">
            <nav className="w-4/5 max-h-16 flex justify-between aling-center px-6 py-2 text-white gap-12">
                <img src="/anomaly-image/logo-morado.svg" alt="Logo-Anomaly" className="logoImga w-44 h-auto"/>
                <ul className="flex py-0.5 px-3 justify-center items-center gap-7 rounded-full list-none w-2/4">
                    {
                        Object.entries(navItems).map(([key, item]) => (
                            <li className="listContainer my-4" key={key}>
                                <a href={item.path} className="listStyle">{item.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="menu-container hidden w-full h-full flex items-center justify-end">
                    <img src="/anomaly-image/hamburger.png" alt="Menu" className="menu w-8 h-auto"/>
                </div>
                <div className="cta-container flex items-center rounded-xl p-2">
                    <a href="/contact" className="callToAction flex w-40 h-7 p-3.5 justify-center items-center gap-2.5 rounded-lg font-normal border bg-purple-500 bg-opacity-40 inset-box-shadow text-light-color no-underline backdrop-filter blur-7">Contactanos</a>
                </div>
            </nav>
        </div>
    )
}