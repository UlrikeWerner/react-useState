import {useState} from "react";
import GalleryCart from "./GalleryComponents/GalleryCart/GalleryCart.tsx";
import SearchForm from "./GalleryComponents/SearchForm/SearchForm.tsx";
import Navi from "../Navi/Navi.tsx";
import { DBdata } from "../assets/dataBase.ts";

type PropsType = {
    characters : DBdata[]
}
export default function Gallery(props: PropsType) {
    const headline: string = "Rick and Morty Gallery";
    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState(props.characters);

    function searchUpdate(value: string): void{
        setSearch(value);
        setData(data.filter((element) => {
            const searchTerm: string = value.toLowerCase();
           return (
               element.name.toLowerCase().includes(searchTerm) /*||
               element.origin.name.toLowerCase().includes(searchTerm)||
               element.gender.toLowerCase().includes(searchTerm)||
               element.species.toLowerCase().includes(searchTerm)||
               element.location.name.toLowerCase().includes(searchTerm)||
               element.status.toLowerCase().includes(searchTerm)*/
           )})
        );
    }

    return (
        <main>
            <Navi title={headline}/>
            <SearchForm search={search} setSearch={searchUpdate}/>
            {data.length !== 0
                ? data.map((character) =>
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
                : <p>Es konnten keine Charaktere gefunden werden!</p>
            }
        </main>
    )
}