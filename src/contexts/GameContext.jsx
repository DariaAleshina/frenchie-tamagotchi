import { createContext, useContext, useEffect, useReducer } from 'react';

const GameContext = createContext();

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;

const initialState = {
  isModeFast: true,
  fullness: INITIAL_SCORE,
  happiness: INITIAL_SCORE,
  energy: INITIAL_SCORE,
  activatedAction: null,
  feedDisabled: false,
  playDisabled: false,
  sleepDisabled: false,
  rubsDisabled: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setModeFast':
      return { ...state, isModeFast: action.payload };
    case 'decreaseStats':
      return {
        ...state,
        fullness: Math.max(state.fullness - 2, 0),
        happiness: Math.max(state.happiness - 3, 0),
        energy: Math.max(state.energy - 4, 0),
      };
    case 'play':
      return {
        ...state,
        activatedAction: 'playing',
        happiness: Math.min(state.happiness + 15, MAX_SCORE),
        energy: Math.min(state.energy - 3, MAX_SCORE),
        playDisabled: true,
      };
    case 'rubs':
      return {
        ...state,
        activatedAction: 'enjoyingearrubs',
        happiness: Math.min(state.happiness + 5, MAX_SCORE),
        rubsDisabled: true,
      };
    case 'sleep':
      return {
        ...state,
        activatedAction: 'sleeping',
        energy: Math.min(state.energy + 20, MAX_SCORE),
        sleepDisabled: true,
      };
    case 'feed':
      return {
        ...state,
        activatedAction: 'eating',
        fullness: Math.min(state.fullness + 15, MAX_SCORE),
        energy: Math.min(state.energy + 7, MAX_SCORE),
        feedDisabled: true,
      };
    case 'activatePlayBtn':
      return { ...state, playDisabled: false };
    case 'activateRubsBtn':
      return { ...state, rubsDisabled: false };
    case 'activateSleepBtn':
      return { ...state, sleepDisabled: false };
    case 'activateFeedBtn':
      return { ...state, feedDisabled: false };
    case 'stopAction':
      return { ...state, activatedAction: null };
    case 'reset':
      return {
        ...state,
        fullness: INITIAL_SCORE,
        energy: INITIAL_SCORE,
        happiness: INITIAL_SCORE,
        activatedAction: null,
        feedDisabled: false,
        playDisabled: false,
        rubsDisabled: false,
        sleepDisabled: false,
      };
    default:
      throw new Error('Unknown action type');
  }
}

function GameProvider({ children }) {
  const [
    {
      isModeFast,
      fullness,
      happiness,
      energy,
      activatedAction,
      playDisabled,
      rubsDisabled,
      sleepDisabled,
      feedDisabled,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // setting speed based on mode
  const intervalReduceStatSecs = isModeFast ? 3 : 60;
  const buttonInactiveSecs = isModeFast ? 6 : 60;
  const actionPlaySecs = isModeFast ? 3 : 6;

  // checking if game is over
  const isGameOver = fullness === 0 || happiness === 0 || energy === 0;

  // deriving Pet Display State
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
      dispatch({ type: 'decreaseStats' });
    }, intervalReduceStatSecs * 1000); //

    return () => clearInterval(interval);
  }, [isGameOver, activatedAction, intervalReduceStatSecs]);

  // handling action buttons click
  function handleFeed() {
    dispatch({ type: 'feed' });

    setTimeout(() => {
      dispatch({ type: 'stopAction' });
      setTimeout(() => {
        dispatch({ type: 'activateFeedBtn' });
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handlePlay() {
    dispatch({ type: 'play' });

    setTimeout(() => {
      dispatch({ type: 'stopAction' });
      setTimeout(() => {
        dispatch({ type: 'activatePlayBtn' });
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handleRubs() {
    dispatch({ type: 'rubs' });

    setTimeout(() => {
      dispatch({ type: 'stopAction' });
      setTimeout(() => {
        dispatch({ type: 'activateRubsBtn' });
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  function handleSleep() {
    dispatch({ type: 'sleep' });

    setTimeout(() => {
      dispatch({ type: 'stopAction' });
      setTimeout(() => {
        dispatch({ type: 'activateSleepBtn' });
      }, buttonInactiveSecs * 1000);
    }, actionPlaySecs * 1000);
  }

  return (
    <GameContext.Provider
      value={{
        isModeFast,
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
        dispatch,
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
