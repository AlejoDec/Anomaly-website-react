import CTAbutton from "../general/CTAbutton";
import { FormattedMessage } from "react-intl";
import '../styles/TextHero.css';

export default function TextHero() {
    return (
        <div className="textHero-container flex flex-col justify-center items-center gap-4">
            <h1 className="text-8xl font-normal text-white text-center">
                Anomaly
            </h1>
            <h2 className="text-6xl font-normal bg-gradient-to-b from-white to-purple-500 text-transparent bg-clip-text text-center">
                <FormattedMessage 
                    id="hero.subTitle"
                    defaultMessage="Lo diferente nos diferencia"
                />
            </h2>
            <p className="text-4xl font-light text-center w-[70%] text-stone-300">
                <FormattedMessage
                    id="hero.text"
                    defaultMessage="En Anomaly, creemos que lo diferente nos diferencia. Por eso, creamos soluciones únicas y personalizadas para cada cliente."
                />
            </p>
            <CTAbutton href={"/contact"} classNameName="text-stone-800 p-2 text-xl hover:text-white max-sm:text-base">
                <FormattedMessage id="hero.cta" defaultMessage='¿Quieres ser diferente?' />
            </CTAbutton>
        </div>
    )
}