import trollFace from "../images/troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={trollFace} alt="" className="header--image"/>
            <h2 className="header--title">Buzzword Builder</h2>
            <h4 className="header--project">Made with 🤍 by Ishank</h4>
        </header>
    )
}