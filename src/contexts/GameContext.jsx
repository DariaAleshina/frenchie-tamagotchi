import { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;

function GameProvider({ children }) {
  const [fullness, setFullness] = useState(INITIAL_SCORE);
  const [happiness, setHappiness] = useState(INITIAL_SCORE);
  const [energy, setEnergy] = useState(INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activatedAction, setActivatedAction] = useState(null);

  const [feedDisabled, setFeedDisabled] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [sleepDisabled, setSleepDisabled] = useState(false);
  const [rubsDisabled, setRubsDisabled] = useState(false);

  const [isModeFast, setIsModeFast] = useState(true);
  const intervalReduceStatSecs = isModeFast ? 3 : 60;
  const buttonInactiveSecs = isModeFast ? 6 : 60;
  const actionPlaySecs = isModeFast ? 3 : 6;

  // preload videos
  // useEffect(() => {
  //   const { video } = mediaAssets;
  //   const preloadVideo = src => {
  //     const video = document.createElement('video');
  //     video.src = src;
  //     video.preload = 'auto';
  //   };

  //   preloadVideo(video.happy);
  //   preloadVideo(video.sad);
  //   preloadVideo(video.tired);
  //   preloadVideo(video.normal);
  //   preloadVideo(video.hungry);
  // }, []);

  // checking if game is over
  useEffect(() => {
    if (fullness === 0 || happiness === 0 || energy === 0) {
      setIsGameOver(true);
    }
  }, [fullness, happiness, energy]);

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
    setIsGameOver(false);
    setFeedDisabled(false);
    setPlayDisabled(false);
    setSleepDisabled(false);
    setRubsDisabled(false);
    setActivatedAction(null);
  }
  return (
    <GameContext.Provider
      value={
        (fullness,
        happiness,
        energy,
        isGameOver,
        activatedAction,
        feedDisabled,
        playDisabled,
        rubsDisabled,
        sleepDisabled,
        handleFeed,
        handlePlay,
        handleRubs,
        handleSleep,
        isModeFast,
        setIsModeFast,
        handleReset)
      }
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
