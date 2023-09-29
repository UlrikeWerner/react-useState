import { Link } from 'react-router-dom'
import './galleryCart.css'

interface Person {
    isDetail: boolean;
    id: number;
    name: string;
    status: string;
    species: string;
    type?: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episode?: string[];
}

export default function GalleryCart(person : Person) {
    const {id, name, status, species, gender, origin, location, image} = person;

    return (
        <section className="galleryCard-card-border galleryCard-card-flex galleryCard-card-margin">
            <img className="galleryCard-image-border-right" src={image} alt={name} />
            <div>
                <h2 className="galleryCard-h2-color">{name}</h2>
                <p>{species !== "unknown" && species}</p>
                <p>{gender !== "unknown" && gender}</p>
                <p>{status !== "unknown" && status}</p>
                <p>{origin !== "unknown" && origin}</p>
                <p>{location !== "unknown" && location}</p>
                {!person.isDetail && <Link to={"/characters/"+ id}>Detail</Link>}
            </div>
        </section>
    )
}