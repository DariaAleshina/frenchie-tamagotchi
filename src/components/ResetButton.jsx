import { useGame } from '../contexts/GameContext';

function ResetButton() {
  const { isGameOver, dispatch } = useGame();

  const style = `cursor-pointer py-2 px-4 hover:text-yellow-dark focus:outline-none focus:ring-5 focus:ring-yellow-shadow  ${
    isGameOver && 'bg-yellow-2'
  }`;
  return (
    <button onClick={() => dispatch({ type: 'reset' })} className={style}>
      Reset the Game
    </button>
  );
}

export default ResetButton;
