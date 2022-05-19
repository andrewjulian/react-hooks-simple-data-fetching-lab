// create your App component here
import React, {useEffect, useState} from 'react'

const App = () => {

    const [dogUrl, setDogUrl] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

  
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then(data => {
                setDogUrl(data.message)
                setIsLoaded(true)
            });
        }, []
    );

    if (!isLoaded) return <h3>Loading...</h3>;

    return (
    <div>
        <img src={dogUrl} alt = "A Random Dog" />
    </div>
    )
}

export default App