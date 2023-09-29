import Navi from "../Navi/Navi";

export default function WelcomePage() {
    const headline: string = "Welcome at the Rick and Morty Gallery";

    return (
        <>
            <Navi title={headline}/>
            <img src="https://repository-images.githubusercontent.com/273195371/232cd780-b25f-11ea-9d76-552e8e4182f8" alt="Rick and Morthy Image"/>
        </>
    )
}