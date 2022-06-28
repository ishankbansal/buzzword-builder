import memesData from "../memedata.js"
import React from 'react'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main> 
            <div className="form">
                <input
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    >Get a new meme image 🏞</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}