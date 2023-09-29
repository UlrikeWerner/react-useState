import Navi from "../Navi/Navi.tsx";
import Form from "./FormComponents/Form.tsx";

export default function FormPage(props: any) {
    const headline: string = "Add a new Character";

    return (
        <>
            <Navi title={headline}/>
            <Form data={props.data} setNewCharacter={props.setNewCharacter}/>
        </>
    )
}