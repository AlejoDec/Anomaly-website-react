import '../styles/ImageHero.css';

export default function ImageHero() {
    return (
        <div className="heroImage-container flex justify-center bg-black">
            <img src="hero/hero-image.webp" alt="pagina" className="heroImage w-[90vw] h-2/4 object-cover border-solid border-black" />
        </div>
    )
}