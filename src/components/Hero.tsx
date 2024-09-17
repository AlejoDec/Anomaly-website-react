import NewTag from "./hero/NewTag";
import ImageHero from "./hero/ImageHero";
import TextHero from "./hero/TextHero";
import './styles/Hero.css';

export default function Hero() {
    return (
        <div className="hero-co" id="inicio">
            <NewTag />
            <TextHero />
            <img src="/anomaly-image/logo-morado.svg" alt="logo-morado-de-la-empresa" className="imageLogo" />
            <ImageHero />
        </div>
    )
}