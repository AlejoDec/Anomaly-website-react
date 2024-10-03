import NewTag from "../hero/NewTag";
import ImageHero from "../hero/ImageHero";
import TextHero from "../hero/TextHero";
import '../styles/Hero.css';

export default function Hero() {
    return (
        <div className="hero-co">
            <NewTag />
            <TextHero />
            <ImageHero />
        </div>
    )
}