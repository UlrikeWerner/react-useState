import { useParams } from "react-router-dom";
//import './navi.css';
import {rickAndMortyDB} from "../../../assets/dataBase.ts";
import GalleryCart from "./GalleryCart.tsx";

export default function CharacterDetailCard() {
    const urlParams = useParams();
    const data= rickAndMortyDB.results
        .filter((character) =>
            character?.id.toString() === urlParams?.id);

    return (
        <>
            {data.length !== 0
                ? data.map((character) =>
                    <GalleryCart
                        isDetail={true}
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species ={character.species}
                        gender={character.gender}
                        origin={character.origin.name}
                        location={character.location.name}
                        image={character.image}
                    />)
                : <p>Es konnten die Seite nicht gefunden werden!</p>
            }
        </>
    )
}