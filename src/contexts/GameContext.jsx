import { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;

function GameProvider({ children }) {
  const [fullness, setFullness] = useState(INITIAL_SCORE);
  const [happiness, setHappiness] = useState(INITIAL_SCORE);
  const [energy, setEnergy] = useState(INITIAL_SCORE);
  const [activatedAction, setActivatedAction] = useState(null);

  const [feedDisabled, setFeedDisabled] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [sleepDisabled, setSleepDisabled] = useState(false);
  const [rubsDisabled, setRubsDisabled] = useState(false);

  const [isModeFast, setIsModeFast] = useState(true);
  const intervalReduceStatSecs = isModeFast ? 3 : 60;
  const buttonInactiveSecs = isModeFast ? 6 : 60;
  const actionPlaySecs = isModeFast ? 3 : 6;

  // checking if game is over
  const isGameOver = fullness === 0 || happiness === 0 || energy === 0;

  //   deriving Pet Display State
  let petDisplayState;
  if (isGameOver) petDisplayState = 'gameOver';
  if (!isGameOver) {
    if (activatedAction) petDisplayState = activatedAction;
    if (!activatedAction) {
      if (happiness > 80) petDisplayState = 'happy';
      if (happiness <= 80) petDisplayState = 'normal';
      if (happiness <= 60 || energy <= 60 || fullness <= 50)
        petDisplayState = 'sad';
      if (energy <= 40) petDisplayState = 'tired';
      if (fullness <= 50) petDisplayState = 'hungry';
    }
  }

  // decrease stats over time
  useEffect(() => {
    if (isGameOver || activatedAction) return;
    const interval = setInterval(() => {
      setFullness(f => Math.max(f - 2, 0));
      setHappiness(h => Math.max(h - 3, 0));
      setEnergy(e => Math.max(e - 4, 0));
    }, intervalReduceStatSecs * 1000); //

    return () => clearInterval(interval);
  }, [isGameOver, activatedAction, intervalReduceStatSecs]);

  // handling speed mode change
  function handleSetModeFast(state) {
    setIsModeFast(state);
  }

  // handling action buttons click
  function handleFeed() {
    setFullness(f => Math.min(f + 15, MAX_SCORE));
    setEnergy(e => Math.min(e + 7, MAX_SCORE));

    setFeedDisabled(true);
    setActivatedAction('eating');
    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setFeedDisabled(false);
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handlePlay() {
    setHappiness(h => Math.min(h + 15, MAX_SCORE));
    setEnergy(e => Math.min(e - 3, MAX_SCORE));

    setPlayDisabled(true);
    setActivatedAction('playing');

    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setPlayDisabled(false);
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handleRubs() {
    setHappiness(h => Math.min(h + 5, MAX_SCORE));

    setRubsDisabled(true);
    setActivatedAction('enjoyingearrubs');
    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setRubsDisabled(false);
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handleSleep() {
    setEnergy(e => Math.min(e + 20, MAX_SCORE));

    setSleepDisabled(true);
    setActivatedAction('sleeping');
    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setSleepDisabled(false);
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handleReset() {
    setFullness(INITIAL_SCORE);
    setHappiness(INITIAL_SCORE);
    setEnergy(INITIAL_SCORE);
    setFeedDisabled(false);
    setPlayDisabled(false);
    setSleepDisabled(false);
    setRubsDisabled(false);
    setActivatedAction(null);
  }
  return (
    <GameContext.Provider
      value={{
        isGameOver,
        fullness,
        happiness,
        energy,
        activatedAction,
        petDisplayState,
        feedDisabled,
        playDisabled,
        rubsDisabled,
        sleepDisabled,
        handleFeed,
        handlePlay,
        handleRubs,
        handleSleep,
        isModeFast,
        handleSetModeFast,
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('Game Context is used outside its Provider');
  return context;
}

export { GameProvider, useGame };
