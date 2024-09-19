import '../styles/About.css';

const Miembros = [
    {
        nombre: "Alejandro ",
        apellidos: "Hurtado Alvarez",
        rol: "CTO - Director de tecnología",
        img: "/miembros/alejandro.png",
        frase: "La tecnología es el futuro, y nosotros somos el futuro de la tecnología"
    },
    {
        nombre: "Juan Diego ",
        apellidos: "Calle Giraldo",
        rol: "CEO - Director ejecutivo",
        img: "/miembros/Juan.jpg",
        frase: "Dale siempre una oportunidad a lo mejor, aunque parezca amenazador"
    },
    {
        nombre: "Pedro ",
        apellidos: "Calle Giraldo",
        rol: "Founder - CSO - CMO",
        img: "/miembros/Pedro.jpg",
        frase: "Peace through caos"
    },
    {
        nombre: "Yefferson ",
        apellidos: "Muñoz Uribe",
        rol: "Director Creativo",
        img: "/miembros/jefferson.jpg",
        frase: "Si puedes soñarlo, podemos hacerlo"
    },
    {
        nombre: "Camilo",
        apellidos: "Miranda Ribon",
        rol: "Desarrollador Full Stack",
        img: "/miembros/camilo.jpg",
        frase: "",
    }
]

export default function Miembro() {
    return (
        Miembros.map((miembro) => (
            <div className="flex flex-col items-center gap-4 rounded-xl bg-[#000] w-full h-[341px] p-2">
                <article className="relative w-full">
                    <img src="/miembros/anonimo.png" alt="anonimus" className="rounded-xl text-stone-300" />
                    {/* <img src={miembro.img} alt={miembro.nombre}> */}
                </article>
                <h4 className="text-stone-400 text-xl text-center">{miembro.nombre}<br />{miembro.apellidos}</h4>
                <p className="text-stone-400 text-center">{miembro.rol}</p>
            </div>
        ))
    )
}