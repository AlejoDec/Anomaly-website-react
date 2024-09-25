import '../styles/Card2.css';

interface Props {
    title: React.ReactNode ;
    description: React.ReactNode ;
    image: string;
}

export default function Card2({ title, description, image }: Props) {
    return (
        <div className="card-container">
            <div className="card-container">
                <img src={image} alt="services-card-2" className="image-style" />
                <div className="absolute bottom-2 left-4 z-1 p-3">
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="text-xs font-light text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}