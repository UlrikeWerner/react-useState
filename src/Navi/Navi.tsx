import { Link } from "react-router-dom";
import './navi.css';

export default function Navi({title}:{title: string}) {

    return (
        <>
            <h1 className="navi-header-margin-button">{title}</h1>
            <nav className="navi-nav-margin-button">
                <Link className="navi-link-margin-right navi-link-buttonStyle" to={"/"}>Home</Link>
                <Link className="navi-link-buttonStyle" to={"/characters"}>Gallery</Link>
            </nav>
        </>
    )
}