import PetView from '../../components/PetView';
import MiniActionButtons from './MiniActionButtons';
import { useGame } from '../../contexts/GameContext';
import { useEffect } from 'react';

const STORAGE_KEY = 'tamagotchi';

function loadGameState() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const parsed = JSON.parse(savedState);
    // Validate and merge with default state to handle version changes
    return { ...parsed };
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
  return null;
}

function MiniGameApp() {
  const { dispatch } = useGame();
  // loading data from local storage
  useEffect(() => {
    const savedState = { ...loadGameState() };
    console.log(savedState);

    if (!savedState) return;
    dispatch({ type: 'localStorageLoaded', payload: savedState });
    // dispatch({ type: 'setPiPOpened', payload: true });
  }, [dispatch]);

  return (
    <div className="bg-light w-full h-full flex justify-evenly items-center absolute">
      <PetView />
      <MiniActionButtons />
    </div>
  );
}

export default MiniGameApp;
