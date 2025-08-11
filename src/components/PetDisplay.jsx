import { statusMessage } from '../contentGameLogic';
import { useGame } from '../contexts/GameContext';
import PetView from './PetView';

export default function PetDisplay() {
  const { petDisplayState } = useGame();

  return (
    <>
      <PetView />
      <p className="font-anta lg:text-2xl">
        {statusMessage?.[petDisplayState]}
      </p>
    </>
  );
}
