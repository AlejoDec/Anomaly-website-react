import '../styles/About.css';

const Miembros = [
    {
        nombre: "Alejandro ",
        apellidos: "Hurtado Alvarez",
        rol: "CTO",
        img: "/miembros/alejandro.webp",
        frase: "La tecnología es el futuro, y nosotros somos el futuro de la tecnología"
    },
    {
        nombre: "Juan Diego ",
        apellidos: "Calle Giraldo",
        rol: "CEO",
        img: "/miembros/Juan.webp",
        frase: "Dale siempre una oportunidad a lo mejor, aunque parezca amenazador"
    },
    {
        nombre: "Pedro ",
        apellidos: "Calle Giraldo",
        rol: "Founder - CSO - CMO",
        img: "/miembros/Pedro.webp",
        frase: "Peace through caos"
    },
    {
        nombre: "Yefferson ",
        apellidos: "Muñoz Uribe",
        rol: "CDO",
        img: "/miembros/jefferson.webp",
        frase: "Si puedes soñarlo, podemos hacerlo"
    },
    {
        nombre: "Camilo",
        apellidos: "Miranda Ribon",
        rol: "Full Stack",
        img: "/miembros/camilo.webp",
        frase: "",
    }
]

export default function Miembro() {
    return (
        Miembros.map((miembro) => (
            <div className="flex flex-col items-center gap-4 rounded-xl bg-[#000] w-full h-[341px] p-2">
                <article className="relative w-full">
                    <img src="/miembros/anonimo.webp" alt="anonimus" className="rounded-xl text-stone-300" />
                    {/* <img src={miembro.img} alt={miembro.nombre}> */}
                </article>
                <h4 className="text-stone-400 text-xl text-center">{miembro.nombre}<br />{miembro.apellidos}</h4>
                <p className="text-stone-400 text-center">{miembro.rol}</p>
            </div>
        ))
    )
}