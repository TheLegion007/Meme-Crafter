import { useEffect, useState } from 'react';

export default function Main() {
    const [meme, setMeme] = useState({
        topText: " Pineapple can't go on pizza, it's a fruit ", 
        bottomText : " Tomato and olives are fruits ",
        imageUrl: "https://i.imgflip.com/9drvzp.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    //console.log(allMemes)

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))    
    }, [])
    
    function getMemeImage() {
        const  randomIndex = Math.floor(Math.random()* allMemes.length)
        const newMemeUrl = allMemes[randomIndex].url
        //console.log(newMemeUrl , " index : " , randomIndex );
        setMeme((preValue)=>({
            ...preValue,
            imageUrl : newMemeUrl
        }))
        
    }

    function handleChange(event) {
        const {value, name}  = event.currentTarget
        //console.log(event.currentTarget)

        setMeme(prevMeme => ({
            ...prevMeme, 
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>
                    <input
                        type="text"
                        placeholder="Enter Top Text "
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>
                    <input
                        type="text"
                        placeholder="Enter Bottom Text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button id="btn-meme" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}