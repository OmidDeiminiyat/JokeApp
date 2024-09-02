import React, { useState } from 'react';
import style from './LatestJokes.module.scss';

function Joke({ joke }) {
  const [isPunchlineVisible, setPunchlineVisible] = useState(false);  

  const togglePunchline = () => {
    setPunchlineVisible(!isPunchlineVisible);  
  };

  return (
    <li onClick={togglePunchline}>
      <p> 🤔 <strong>{joke.setup}</strong></p>
      {isPunchlineVisible && <p> 😂 {joke.punchline}</p>}  
    </li>
  );
}

export default Joke;
