import '../styles/Footer.css';

export default function Footer() {

    return (
        <footer className='flex flex-col w-screen text-stone-300 max-sm:items-center'>
            <div className='footer-content-2 flex justify-between px-20 py-8 max-sm:flex-col max-sm:gap-4'>
                <div className='flex flex-col max-sm:items-center'>
                    <img src="/anomaly-image/logoBlanco.png" alt="Anomaly-logo" className='w-[75px]' />
                    <h2 className='font-bold text-[80px] max-sm:text-[20px] max-sm:text-center'>Anomaly</h2>
                    <p className='font-base text-lg max-sm:text-center'>Agencia de desarrollo creativo</p>
                </div>
                <div className='flex gap-4'>
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
                    <a href="">
                        <img src="/red-social/instagram.png" alt="instagram" className='w-[27px] max-sm:w-[60px]' />
                    </a>
                </div>
            </div>
        </footer>
    )
}