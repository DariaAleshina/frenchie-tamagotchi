import { useGame } from '../contexts/GameContext';
import { useEffect } from 'react';

import ActionButtons from './ActionButtons';
import ResetButton from './ResetButton';
import PetDisplay from './PetDisplay';
import StatBar from './StatBar';

import { loadFromLocalStorage } from '../helpers/functions';

function GameSection() {
  const { isPiPOpened, dispatch } = useGame();
  // loading data from local storage
  useEffect(() => {
    if (isPiPOpened) return;
    const savedState = {
      ...loadFromLocalStorage(),
      isPiPOpened: false,
      feedDisabled: false,
      playDisabled: false,
      sleepDisabled: false,
      rubsDisabled: false,
    };

    if (!savedState) return;
    dispatch({ type: 'localStorageLoaded', payload: savedState });

    if (savedState.activatedAction) {
      setTimeout(() => {
        dispatch({ type: 'stopAction' });
      }, 2000);
    }
  }, [dispatch, isPiPOpened]);

  return (
    <section
      className={`max-w-3xl mr-auto ml-auto flex justify-center flex-col items-center gap-5 transition-opacity duration-800 ${
        !isPiPOpened ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <StatBar />
      <PetDisplay />
      <ActionButtons />
      <ResetButton />
    </section>
  );
}

export default GameSection;
