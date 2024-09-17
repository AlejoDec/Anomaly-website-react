import '../styles/Card1.css';

interface Props {
    title: string;
    description: string;
    image: string;
}

export default function Card1({ title, description, image }: Props) {
    return (
        <div className="card-container w-[208px] h-[240px] shrink-0 rounded-lg relative overflow-hidden">
            <img src={image} alt="services-card-1" className="image-style" />
            <div className="text-container absolute top-2 left-4 z-1 p-2">
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="text-xs font-light text-white">{description}</p>
            </div>
        </div>
    )
}