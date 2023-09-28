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
        <section>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{species !== "unknown" && species}</p>
            <p>{gender !== "unknown" && gender}</p>
            <p>{status !== "unknown" && status}</p>
            <p>{origin !== "unknown" && origin}</p>
            <p>{location !== "unknown" && location}</p>
        </section>
    )
}