import { useState, useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import ActionButtons from './components/ActionButtons';
import StatBar from './components/StatBar';

import './App.css';

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;

function App() {
  const [fullness, setFullness] = useState(INITIAL_SCORE);
  const [happiness, setHappiness] = useState(INITIAL_SCORE);
  const [energy, setEnergy] = useState(INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (fullness === 0 || happiness === 0 || energy === 0) {
      setIsGameOver(true);
    }
  }, [fullness, happiness, energy]);

  // decrease stats over time
  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      setFullness(f => Math.max(f - 2, 0));
      setHappiness(h => Math.max(h - 3, 0));
      setEnergy(e => Math.max(e - 4, 0));
    }, 2000); // every N seconds

    return () => clearInterval(interval);
  }, [isGameOver]);

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
    setFullness(INITIAL_SCORE);
    setHappiness(INITIAL_SCORE);
    setEnergy(INITIAL_SCORE);
    setIsGameOver(false);
  }

  return (
    <>
      <h1 className="text-3xl mb-5 md:text-6xl md:mb-9">Frenchie Tamagotchi</h1>
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
          isGameOver={isGameOver}
        />
        <button
          onClick={handleReset}
          className={`cursor-pointer py-2 px-4  ${
            isGameOver && 'bg-[#D79F3B]'
          }`}
        >
          Reset the Game
        </button>
      </section>
    </>
  );
}

export default App;
