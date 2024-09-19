import CTAbutton from '../general/CTAbutton';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className='flex flex-col w-screen gap-6'>
            <div className=' flex flex-col justify-evenly gap-6 h-[40vh] max-sm:hidden'>
                <div className="lineas1 flex text-stone-300 text-3xl max-w-none space-x-16 animate-loop-scroll h-content">
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                    <p> Diseña</p>
                </div>
                <div className="lineas2 flex text-stone-300 text-3xl max-w-none space-x-16 animate-loop-scroll h-content">
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                    <p> Imagina</p>
                </div>
                <div className="lineas3 flex  text-stone-300 text-3xl max-w-none space-x-16 animate-loop-scroll h-content">
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                    <p>Crea</p>
                </div>
            </div>
            <div className='flex items-center justify-center p-8 gap-2 h-[30vh] max-sm:flex-col max-sm:h-[100vh]'>
                <div className='px-[12em] flex flex-col flex-start max-sm:items-center'>
                    <img src="/anomaly-image/logoBlanco.png" alt="Logo blanco anomaly" className='w-[150px] max-sm:w-[75px]' />
                    <p className='text-stone-300 max-sm:text-sm max-sm:text-center'>Anomaly</p>
                    <p className='text-stone-300 underline max-sm:tex-sm max-sm:text-center'>Itagüí, Antioquia, Colombia</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-8 max-sm:flex-col'>
                        <p className='text-stone-300 text-xl max-sm:text-base'>Nos encantaria trabajar con tigo:</p>
                        <CTAbutton href='/contact' text='Trabajemos juntos' className='text-stone-800 p-0.5 text-md font-normal hover:text-white'/>
                        <a href="https://www.instagram.com/anomalydigitalmarketing?igsh=MWdzNjVlcjZzNWN0Zg==" className='hover:scale-105' target='_blank'>
                            <img src="/red-social/instagram.png" alt="Instagram" className='w-[35px]' />
                        </a>
                    </div>
                    <div className='flex gap-4 text-stone-300 max-sm:hidden'>
                        <div className='p-4'>
                            <p>© 2024 Anomaly Digital Services</p>
                        </div>
                        <div className='p-4'>
                            <p>Politicas de privacidad</p>
                        </div>
                        <div className='p-4'>
                            <p>Terminos y condiciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}