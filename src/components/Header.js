import trollFace from "../images/troll-face.png";

export default function Headers(){

    return (
        <nav className="header">
            <img className="header--trollface" src={trollFace} alt="troll face"/>
            <h3 className="header--title">Meme Generator</h3>
            <h3 className="header--projectnumber">React Course - project 3</h3>
        </nav>
    );
}