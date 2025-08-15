import { useGame } from '../contexts/GameContext';
import { useLocalStorageMain } from '../hooks/useStateFromLocalStorage';

import ActionButtons from './ActionButtons';
import ResetButton from './ResetButton';
import PetDisplay from './PetDisplay';
import StatBar from './StatBar';

function GameSection() {
  const { isPiPOpened } = useGame();
  useLocalStorageMain(isPiPOpened);

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
