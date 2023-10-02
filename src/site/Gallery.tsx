import {useState} from "react";
import GalleryCart from "./GalleryComponents/GalleryCart/GalleryCart.tsx";
import SearchForm from "./GalleryComponents/SearchForm/SearchForm.tsx";
import Navi from "../Navi/Navi.tsx";
import { DBdata } from "../assets/dataBase.ts";

type PropsType = {
    characters : DBdata[],
    page: number,
    setPage: (page: number) => void
}

enum PageOperator {
    Back,
    Forword
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

    function setNewPage(opterator: PageOperator){
        if(opterator === PageOperator.Forword && props.page < 42){
            props.setPage(props.page + 1);
        }

        if(opterator === PageOperator.Back && props.page > 1){
            props.setPage(props.page -1);
        }
    }

    return (
        <main>
            <Navi title={headline}/>
            <SearchForm search={search} setSearch={searchUpdate}/>
            <div>
                <button onClick={() => setNewPage(PageOperator.Back)}>
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
                <p>{props.page}</p>
                <button onClick={() => setNewPage(PageOperator.Forword)}>
                    <span className="material-symbols-outlined">
                            chevron_right
                    </span>
                </button>
            </div>
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