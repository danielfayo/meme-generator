import React, {useState, useEffect} from "react";
// import memesData from "https://api.imgflip.com/get_memes";

export default function Meme(){
    // const [image, setImage] = useState("http://i.imgflip.com/1bij.jpg")

    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    },[])

    function handleClick(){
        const memeUrl = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: memeUrl
            }
        })
    }

    function changeMeme(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main className="meme">
            <div className="form-inputs">
                <input type="text" placeholder="top text" value={meme.topText} name="topText" onChange={changeMeme} className="input"/>
                <input type="text" placeholder="bottom text" value={meme.bottomText} name="bottomText" onChange={changeMeme}  className="input"/>
            </div>
            <button className="button" onClick={handleClick} >Get a new meme image</button>
                <div className="meme-image">
                    <img src={meme.randomImage} alt="" />
                    <p className="meme-text"><span className="first-line">{meme.topText}</span><span className="second-line">{meme.bottomText}</span></p>
                </div>
        </main>
    )
}

