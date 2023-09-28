import {useState} from "react";
import {rickAndMortyDB} from "../assets/dataBase.ts";
import GalleryCart from "./RaMGalleryComponents/GalleryCart/GalleryCart.tsx";
import SearchForm from "./RaMGalleryComponents/SearchForm/SearchForm.tsx";
export default function RaMGallery() {
    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState(rickAndMortyDB.results);

    function searchUpdate(value: string): void{
        setSearch(value);
        setData(rickAndMortyDB.results.filter((element) => {
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
            <h1>Rick and Morty Gallery</h1>
            <SearchForm search={search} setSearch={searchUpdate}/>
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
        </main>
    )
}