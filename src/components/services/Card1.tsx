import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/Card1.css';

interface Props {
    title: React.ReactNode ;
    description: React.ReactNode ;
    image: string;
}

export default function Card1({ title, description, image }: Props) {
    return (
        <div className="card-container max-w-52 max-h-60 shrink-0 rounded-lg relative overflow-hidden max-sm:max-w-72">
            <LazyLoadImage src={image} alt="services-card-1" className="image-style max-w-52 max-sm:max-w-72" />
            <div className="absolute top-2 left-4 z-1 p-2">
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="text-xs font-light text-white">{description}</p>
            </div>
        </div>
    )
}