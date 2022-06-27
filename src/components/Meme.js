import memes from "../memesdata";

export default function Meme() {

    function getMemeImage(e){
        e.preventDefault();
        let rand = Math.floor(Math.random() * 100);
        console.log(memes['data']['memes'][rand]['url']);
    }

    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top Text"/>
                <input type="text"className="form--input" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🍍</button>
            </form>
        </main>
    );
}