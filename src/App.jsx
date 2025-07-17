import { useState, useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import ActionButtons from './components/ActionButtons';
import StatBar from './components/StatBar';

import './App.css';

const MAX_SCORE = 100;

function App() {
  const [fullness, setFullness] = useState(MAX_SCORE);
  const [happiness, setHappiness] = useState(MAX_SCORE);
  const [energy, setEnergy] = useState(MAX_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (fullness === 0 || happiness === 0 || energy === 0) {
      setIsGameOver(true);
    }
  }, [fullness, happiness, energy]);

  // decrease stats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setFullness(f => Math.max(f - 5, 0));
      setHappiness(h => Math.max(h - 3, 0));
      setEnergy(e => Math.max(e - 2, 0));
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  function handleFeed() {
    console.log('clicked to FEED');
    setFullness(f => Math.min(f + 15, MAX_SCORE));
  }

  function handlePlay() {
    console.log('clicked to Play');
    setHappiness(h => Math.min(h + 15, MAX_SCORE));
  }

  function handleSleep() {
    console.log('clicked to SLEEP');
    setEnergy(e => Math.min(e + 15, MAX_SCORE));
  }

  function handleReset() {
    setFullness(MAX_SCORE);
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
        <StatBar fullness={fullness} happiness={happiness} energy={energy} />
        <PetDisplay
          fullness={fullness}
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
