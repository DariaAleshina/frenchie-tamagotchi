import { useState, useEffect } from 'react';

import HeroSection from './components/HeroSection';
import Heading from './components/Heading';
import GameSection from './components/GameSection';
import StatBar from './components/StatBar';
import PetDisplay from './components/PetDisplay';
import { ActionButtons, GameButton } from './components/ActionButtons';

import { mediaAssets } from './mediaAssets';

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;
const INTERVAL_STAT_REDUCING_SEC = 3;
const BUTTON_INACTIVE_SEC = 6;
const ACTION_PLAY_SEC = 3;

function App() {
  const [fullness, setFullness] = useState(INITIAL_SCORE);
  const [happiness, setHappiness] = useState(INITIAL_SCORE);
  const [energy, setEnergy] = useState(INITIAL_SCORE);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activatedAction, setActivatedAction] = useState(null);

  const [feedDisabled, setFeedDisabled] = useState(false);
  const [playDisabled, setPlayDisabled] = useState(false);
  const [sleepDisabled, setSleepDisabled] = useState(false);
  const [rubsDisabled, setRubsDisabled] = useState(false);

  // preload videos
  useEffect(() => {
    const { video } = mediaAssets;
    const preloadVideo = src => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    };

    preloadVideo(video.happy);
    preloadVideo(video.sad);
    preloadVideo(video.tired);
    preloadVideo(video.normal);
    preloadVideo(video.hungry);
  }, []);

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
    }, INTERVAL_STAT_REDUCING_SEC * 1000); //

    return () => clearInterval(interval);
  }, [isGameOver, activatedAction]);

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
      }, BUTTON_INACTIVE_SEC * 1000);
    }, ACTION_PLAY_SEC * 1000);
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
      }, BUTTON_INACTIVE_SEC * 1000);
    }, ACTION_PLAY_SEC * 1000);
  }

  function handleRubs() {
    setHappiness(h => Math.min(h + 5, MAX_SCORE));

    setRubsDisabled(true);
    setActivatedAction('enjoyingearrubs');
    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setRubsDisabled(false);
      }, BUTTON_INACTIVE_SEC * 1000);
    }, ACTION_PLAY_SEC * 1000);
  }

  function handleSleep() {
    setEnergy(e => Math.min(e + 20, MAX_SCORE));

    setSleepDisabled(true);
    setActivatedAction('sleeping');
    setTimeout(() => {
      setActivatedAction(null);
      setTimeout(() => {
        setSleepDisabled(false);
      }, BUTTON_INACTIVE_SEC * 1000);
    }, ACTION_PLAY_SEC * 1000);
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
    <>
      <HeroSection>
        <Heading />
        <GameSection>
          <StatBar fullness={fullness} happiness={happiness} energy={energy} />
          <PetDisplay
            fullness={fullness}
            happiness={happiness}
            energy={energy}
            isGameOver={isGameOver}
            activatedAction={activatedAction}
          />
          <ActionButtons>
            <GameButton
              action={handlePlay}
              inactive={isGameOver || playDisabled}
            >
              Play 🎾
            </GameButton>{' '}
            <GameButton
              action={handleRubs}
              inactive={isGameOver || rubsDisabled}
            >
              Ear Rubs 🤲
            </GameButton>
            <GameButton
              action={handleSleep}
              inactive={isGameOver || sleepDisabled || energy > 60}
            >
              Sleep 😴
            </GameButton>
            <GameButton
              action={handleFeed}
              inactive={isGameOver || feedDisabled || fullness > 60}
            >
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
        </GameSection>
      </HeroSection>
    </>
  );
}

export default App;
