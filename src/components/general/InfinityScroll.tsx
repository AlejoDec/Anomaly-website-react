import '../styles/InfinityScroll.css';

export default function InfinityScroll() {
    return (
        <div className="scrooll flex overflow-hidden space-x-16 group py-6">
            <div className="flex space-x-16 animate-loop-scroll ">
                <p className="max-w-none text-stone-300 text-4xl">SEO</p>
                <p className="max-w-none text-stone-300 text-4xl">WEB</p>
                <p className="max-w-none text-stone-300 text-4xl">MARKETING</p>
                <p className="max-w-none text-stone-300 text-4xl">DIGITAL</p>
                <p className="max-w-none text-stone-300 text-4xl">DISEÑO</p>
                <p className="max-w-none text-stone-300 text-4xl">UI/UX</p>
            </div>
            <div className="flex space-x-16 animate-loop-scroll ">
                <p className="max-w-none text-stone-300 text-4xl">SEO</p>
                <p className="max-w-none text-stone-300 text-4xl">WEB</p>
                <p className="max-w-none text-stone-300 text-4xl">MARKETING</p>
                <p className="max-w-none text-stone-300 text-4xl">DIGITAL</p>
                <p className="max-w-none text-stone-300 text-4xl">DISEÑO</p>
                <p className="max-w-none text-stone-300 text-4xl">UI/UX</p>
            </div>
            <div className="flex space-x-16 animate-loop-scroll " aria-hidden="true">
                <p className="max-w-none text-stone-300 text-4xl">SEO</p>
                <p className="max-w-none text-stone-300 text-4xl">WEB</p>
                <p className="max-w-none text-stone-300 text-4xl">MARKETING</p>
                <p className="max-w-none text-stone-300 text-4xl">DIGITAL</p>
                <p className="max-w-none text-stone-300 text-4xl">DISEÑO</p>
                <p className="max-w-none text-stone-300 text-4xl">UI/UX</p>
            </div>
        </div>
    )
}