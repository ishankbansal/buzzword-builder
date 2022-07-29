import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    const img = new Image();
    img.onload = function() {
      console.log(this.width + 'x' + this.height);
    }
    img.src = 'http://i.imgflip.com/1bij.jpg';
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));

  }, []);

  //console.log(allMeme);

  // const [memeImage, setMemeImage] = React.useState("")
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
  //  console.log(meme.topText.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Create a new buzz 🏞
        </button>
      </div>
      <div className="meme">
        <div className="image-container">
          <img src={meme.randomImage} className="meme--image" alt="" />
        </div>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
