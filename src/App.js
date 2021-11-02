import React, {useState, useEffect} from "react";
import axios from 'axios';


function App() {

  const [frase, guardarFrase] = useState({});

  const {character, image, quote} = frase;

  const api = async () => {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    const respuesta = await axios.get(url);

    //console.log(respuesta.data[0]);
    guardarFrase(respuesta.data[0]);
  }

  useEffect(() => {
    api();
  }, [])


  return (
    <div>
      <h1>{character}</h1>
      <img src={image} alt={character} />
      <p>{quote}</p>
      <button onClick={() => api() }>Random</button>
    </div>
  );
}

export default App;
