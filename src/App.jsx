import { useState, useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import { ActionButtons, GameButton } from './components/ActionButtons';
import StatBar from './components/StatBar';

import './App.css';

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;
const BUTTON_INACTIVE_SEC = 5;

function App() {
  const [fullness, setFullness] = useState(INITIAL_SCORE);
  const [happiness, setHappiness] = useState(INITIAL_SCORE);
  const [energy, setEnergy] = useState(INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);

  const [feedDisabled, setFeedDisabled] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [sleepDisabled, setSleepDisabled] = useState(false);

  useEffect(() => {
    if (fullness === 0 || happiness === 0 || energy === 0) {
      setIsGameOver(true);
    }
  }, [fullness, happiness, energy]);

  // decrease stats over time
  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      setFullness(f => Math.max(f - 1, 0));
      setHappiness(h => Math.max(h - 2, 0));
      setEnergy(e => Math.max(e - 3, 0));
    }, 2000); // every N seconds

    return () => clearInterval(interval);
  }, [isGameOver]);

  function handleFeed() {
    console.log('clicked to FEED');
    setFullness(f => Math.min(f + 15, MAX_SCORE));
    setFeedDisabled(true);

    setTimeout(() => {
      setFeedDisabled(false);
    }, BUTTON_INACTIVE_SEC * 1000);
  }

  function handlePlay() {
    console.log('clicked to Play');
    setHappiness(h => Math.min(h + 15, MAX_SCORE));
    setPlayDisabled(true);
    setTimeout(() => {
      setPlayDisabled(false);
    }, BUTTON_INACTIVE_SEC * 1000);
  }

  function handleSleep() {
    console.log('clicked to SLEEP');
    setEnergy(e => Math.min(e + 20, MAX_SCORE));
    setSleepDisabled(true);
    setTimeout(() => {
      setSleepDisabled(false);
    }, BUTTON_INACTIVE_SEC * 1000);
  }

  function handleReset() {
    setFullness(INITIAL_SCORE);
    setHappiness(INITIAL_SCORE);
    setEnergy(INITIAL_SCORE);
    setIsGameOver(false);
  }

  return (
    <>
      <h1 className="text-3xl mb-5 md:text-6xl md:mb-5">Frenchie Tamagotchi</h1>
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
        <ActionButtons>
          <GameButton action={handlePlay} inactive={isGameOver || playDisabled}>
            Play 🎾
          </GameButton>
          <GameButton
            action={handleSleep}
            inactive={isGameOver || sleepDisabled}
          >
            Sleep 😴
          </GameButton>
          <GameButton action={handleFeed} inactive={isGameOver || feedDisabled}>
            Feed 🍖
          </GameButton>
        </ActionButtons>
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
