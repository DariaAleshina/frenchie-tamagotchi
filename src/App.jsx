import { useState, useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import ActionButtons from './components/ActionButtons';
import StatBar from './components/StatBar';

import './App.css';

const MAX_SCORE = 100;

function App() {
  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(MAX_SCORE);
  const [energy, setEnergy] = useState(MAX_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);

  function handleFeed() {
    console.log('clicked to FEED');
  }

  function handlePlay() {
    console.log('clicked to Play');
  }

  function handleSleep() {
    console.log('clicked to SLEEP');
  }

  function handleReset() {
    setHunger(0);
    setHappiness(MAX_SCORE);
    setEnergy(MAX_SCORE);
  }

  return (
    <>
      <h1 className="text-6xl mb-9">Frenchie Tamagotchi</h1>
      <section
        className="lg:w-3xl mr-auto ml-auto flex justify-center flex-col items-center gap-5
      "
      >
        <StatBar hunger={hunger} happiness={happiness} energy={energy} />
        <PetDisplay
          hunger={hunger}
          happiness={happiness}
          energy={energy}
          isGameOver={isGameOver}
        />
        <ActionButtons
          onFeed={handleFeed}
          onPlay={handlePlay}
          onSleep={handleSleep}
        />
        <button onClick={handleReset} className="cursor-pointer mt-5">
          Reset the Game
        </button>
      </section>
    </>
  );
}

export default App;
