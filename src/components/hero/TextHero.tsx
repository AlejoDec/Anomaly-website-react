import CTAbutton from "../general/CTAbutton";
import '../styles/TextHero.css';

export default function TextHero() {
    return (
        <div className="textHero-container flex flex-col justify-center items-center gap-4">
            <h1 className="text-8xl font-normal text-white text-center">
                Anomaly
            </h1>
            <h2 className="text-6xl font-normal bg-gradient-to-b from-white to-purple-500 text-transparent bg-clip-text text-center">
                lo diferente nos diferencia
            </h2>
            <p className="text-4xl font-light text-center w-[70%] text-stone-300">
                En la industria, la conformidad es moneda corriente. Mismas ideas, mismas soluciones... mismos resultados
            </p>
            <CTAbutton href={"/contact"} text={"¿Quieres ser diferente?"} className="text-stone-800 p-2 text-xl hover:text-white" />
        </div>
    )
}