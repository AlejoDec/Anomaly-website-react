import NewTag from "../hero/NewTag";
import ImageHero from "../hero/ImageHero";
import TextHero from "../hero/TextHero";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 m-4 w-screen bg-hero-gradient mt-3rem">
            <NewTag />
            <TextHero />
            <ImageHero />
        </div>
    )
}