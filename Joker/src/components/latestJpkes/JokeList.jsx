import React from 'react';
import Joke from './Joke';  
import style from './LatestJokes.module.scss';

function JokeList({ jokes, showDiv2 }) {
  return (
    <ul className={style.list} style={{ display: showDiv2 ? 'block' : 'none' }}>
        <h1>{jokes.title}</h1>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} /> 
      ))}
    </ul>
  );
}

export default JokeList;
