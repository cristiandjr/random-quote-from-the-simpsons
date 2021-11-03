import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Tilt from 'react-tilt';

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
  //style={{ height: 250, width: 250 }}

  return (
    <Tilt className="Tilt" options={{ 
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)"   // Easing on enter/exit.
     }} >
    
    <div className="container">
      <img src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG" className="logo" alt="The Simpsons" />
      <div className="box">
        <h1 className="name">{character}</h1>
        <p>"{quote}"</p>
        
        <img className="product" src={image} alt={character} />
        <button className="ran" onClick={() => api() }>Random</button>
       
        
      </div>
    </div>


    </Tilt>
  );
}

export default App;
