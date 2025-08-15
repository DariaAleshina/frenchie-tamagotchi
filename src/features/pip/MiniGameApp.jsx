import { useGame } from '../../contexts/GameContext';
import { useEffect } from 'react';

import PetView from '../../components/PetView';
import MiniActionButtons from './MiniActionButtons';

import { loadFromLocalStorage } from '../../helpers/functions';

function MiniGameApp() {
  const { dispatch } = useGame();
  // loading data from local storage
  useEffect(() => {
    const savedState = {
      ...loadFromLocalStorage(),
      isPiPOpened: true,
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
      }, 3000);
    }
  }, [dispatch]);

  return (
    <div className="bg-light w-full h-full flex justify-evenly items-center absolute">
      <PetView />
      <MiniActionButtons />
    </div>
  );
}

export default MiniGameApp;
