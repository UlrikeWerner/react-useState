import { FormEvent, useState } from "react";
import { DBdata } from "../../assets/dataBase";

export default function Form(props: any) {
    type FormValueType = {
        name: string,
        status: string,
        gender: string
    };

   const [formData, setFormData] = useState<FormValueType>({name:"", status:"", gender:""});
   const [message, setMessage] = useState<string>("");
    function onCharacterSave(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setMessage(`Ein Charakter mit Name: ${formData.name}, Status: ${formData.name} und Gender: ${formData.gender} wurde gespeichert!`);
        const id: number = props.data.length + 1;
        //((element: DBdata) => element.id).toString() + 1;
        console.log(id);
        const newEntry: DBdata = {
            id: props.data.length,
            name: formData.name,
            status: formData.status,
            species: "",
            type: "",
            gender: formData.gender,
            origin: {
                name: "",
                url: ""
            },
            location: {
                name: "",
                url: ""
            },
            image: "",
            episode: [],
            url: "",
            created: Date.now().toLocaleString()
        };
        props.setNewCharacter({...props.data, [id -1]: newEntry});
        setFormData({name:"", status:"", gender:""});
    }

    return (
        <>
            <form onSubmit={onCharacterSave}>
            <input value={formData.name} onChange={(event)=>{setFormData({...formData, name: event.target.value})}} />
            <input value={formData.status} onChange={(event)=>{setFormData({...formData, status: event.target.value})}}/>
            <input value={formData.gender} onChange={(event)=>{setFormData({...formData, gender: event.target.value})}}/>
            <button type="submit">save</button>
            </form>
            <p>{message}</p>
        </>
    )
}