import {useState} from "react";
import {rickAndMortyDB} from "../assets/dataBase.ts";
import GalleryCart from "./RaMGalleryComponents/GalleryCart.tsx";
export default function RaMGallery() {
    const [data, setData] = useState(rickAndMortyDB.results);

    return (
        <>
            {data.map((character) =>
                <GalleryCart
                    key={character.id}
                    name={character.name}
                    status={character.status}
                    species ={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    location={character.location.name}
                    image={character.image}
                />)
            }
        </>
    )
}