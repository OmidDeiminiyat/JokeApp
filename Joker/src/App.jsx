import React, { useState, useEffect } from 'react';
import JokeList from './components/latestJpkes/JokeList';
import { Welcome } from './components/latestJpkes/Welcome';
import style from './components/latestJpkes/LatestJokes.module.scss';

function App() {
  const [jokes, setJokes] = useState([]);  

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten');
        if (!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchJokes();
  }, []);

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDivs = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    console.log('clicked');
    
  };


  return (
    <div className={style.mainBox} >
      <Welcome title="Welcome to Le joke" toggleDivs={toggleDivs} showDiv1={showDiv1} />
      <JokeList jokes={jokes} showDiv2={showDiv2} /> 
    </div>
  );
}

export default App;
