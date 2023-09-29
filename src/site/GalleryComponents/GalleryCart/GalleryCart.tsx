import './galleryCart.css'

type Person = {
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: string,
    location: string,
    image: string
}

export default function GalleryCart({name, status, species, gender, origin, location, image} : Person) {

    return (
        <section className="galleryCart-cart-border galleryCart-cart-flex galleryCart-cart-margin">
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{species !== "unknown" && species}</p>
                <p>{gender !== "unknown" && gender}</p>
                <p>{status !== "unknown" && status}</p>
                <p>{origin !== "unknown" && origin}</p>
                <p>{location !== "unknown" && location}</p>
            </div>
        </section>
    )
}