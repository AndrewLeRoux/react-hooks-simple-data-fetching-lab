import React, {useEffect, useState} from "react";


function App(){

const [dog, setDog] = useState("")
const [isLoaded, setIsLoaded] = useState(false);

useEffect( () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
        setDog(res.message)
        setIsLoaded(true)
        })
}, [])


if (!isLoaded) return <p>Loading...</p>;

return <img alt="A Random Dog" src={dog}></img>

}

export default App