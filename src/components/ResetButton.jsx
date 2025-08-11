import { useGame } from '../contexts/GameContext';
import { ResetIcon } from './icons/icons';

function ResetButton({ isSmall = false }) {
  const { isGameOver, dispatch } = useGame();
  const padding = isSmall ? 'p-1' : 'py-2 px-4';

  const style = `cursor-pointer ${padding} hover:text-yellow-dark focus:outline-none focus:ring-5 focus:ring-yellow-shadow  ${
    isGameOver && 'bg-yellow-2'
  }`;
  return (
    <button onClick={() => dispatch({ type: 'reset' })} className={style}>
      {isSmall ? <ResetIcon /> : 'Reset the Game'}
    </button>
  );
}

export default ResetButton;
