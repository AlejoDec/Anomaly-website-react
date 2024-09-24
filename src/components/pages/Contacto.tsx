import BackToTop from '../general/BackToTop';
import React from 'react';
import Swal from 'sweetalert2';
import '../styles/contacto.css';

export default function Contacto() {
    // Removed unused state variable 'result'

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Removed unused state update
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Bien Hecho!",
                text: "Dentro de breve estarémos en contacto contigo.",
                icon: "success",
                background: '#1d1f25',
              });
            (event.target as HTMLFormElement).reset();
        } else {
        console.log("Error", data);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo no salio bien!, vuelve a intentarlo.",
            background: '#1d1f25',
          });
        // Removed unused state update
        }
    };
    return (
        <main className='w-screen max-sm:w-screen overflow-x-hidden'>
            <div className="flex items-center justify-center flex-col gap-1 contacto max-sm:w-screen">
                <div className="contact flex w-full p-7 items-center">
                    <BackToTop />
                    <section className="imgC w-full h-auto">
                        <div className="imgContact">
                            <img src="/contact/contact.webp" alt="contacto" className="w-full rounded-xl imgStyle" />
                        </div>
                    </section>
                    <section className="w-full h-auto flex justify-center items-center max-sm:w-screen">
                        <div className="text w-4/5 h-4/5 flex flex-col justify-center items-center gap-4">
                            <h2 className="text-4xl text-white">Contacto</h2>
                            <p className="text-white text-center">Tienes ideas que quieres digitalizar? Envianos tu informacion para estar en contacto.</p>
                            <form className="form-style w-4/5 flex flex-col items-center gap-4" onSubmit={onSubmit}>
                                <input type="text" name="name" placeholder="Nombre" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="text" name="lastName" placeholder="Apellido" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="email" name="email" placeholder="Correo" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="tel" name="telefono" placeholder="Telefono" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="text" name="empresa" placeholder="Empresa" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="url" name="pagina" placeholder="URL de la empresa" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <input type="text" name="rol" placeholder="Rol en la empresa" className="w-full h-10 px-4 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none" required />
                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Mensaje" className="w-full h-32 px-4 py-2 rounded-lg bg-[#1d1f25] border border-[#1d1f25] text-white placeholder-[#6b6b6b] focus:outline-none"></textarea>
                                <button
                                    className="relative overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
                                    type="submit"
                                >
                                    <span className="relative text-white font-bold px-8 py-8"> Enviar </span>
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}