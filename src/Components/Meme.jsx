 
import { useState,useEffect } from "react";
export const Meme = () => {

  
    const [memeImage, setMeme] = useState({

        randomImage: "https://i.imgflip.com/30b1gx.jpg",
        topText: "",
        bottomText:""
    })

    const [allMemesImage , setAllMemesImage] = useState([])



    useEffect(() => {
           fetch("https://api.imgflip.com/get_memes")
             .then(res => res.json())
            .then(data => setAllMemesImage(data.data.memes))
    }, [])




    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allMemesImage.length) 
        const url = allMemesImage[randomNumber].url
        
        setMeme((prevImg) => {
            return {
                ...prevImg , randomImage:url
            }
        })
        // console.log(url)
    }
    console.log(memeImage.randomImage)
    return (
        <div>
            <div className="meme-input">
                <div className="input">
                    <input type="text" placeholder="First Text"/>
                    <input type="text" placeholder="Second Text"/> <br />
                </div>
                <button onClick={handleClick}>Generate New Meme</button>
            </div>
            <img src="{memeImage.randomImage}"/>
            <img src="{https://i.imgflip.com/3kwur5.jpg}"/>
        </div>
    )
}
