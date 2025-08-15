import openPiPGame from '../features/pip/openPiPGame';
import { useGame } from '../contexts/GameContext';

const CONTROL_KEY = 'game-control';

function MiniGameButton() {
  const { dispatch, isPiPOpened } = useGame();

  async function handleOpenMiniGame() {
    dispatch({ type: 'setPiPOpened', payload: true });
    const pipWindow = await openPiPGame();
    if (!pipWindow) return dispatch({ type: 'setPiPOpened', payload: false });

    pipWindow.addEventListener('pagehide', () => {
      localStorage.setItem(CONTROL_KEY, 'MAIN');
      dispatch({ type: 'setPiPOpened', payload: false });
    });
  }

  return (
    <button
      className={`relative ${
        isPiPOpened ? 'border-grey-inactive' : 'cursor-pointer'
      } border-2 w-10 h-full`}
      aria-label="Open Mini Game in pop-up window"
      title="Open mini-game in pop-up window"
      onClick={handleOpenMiniGame}
      disabled={isPiPOpened}
    >
      <div
        className={`${
          isPiPOpened ? 'bg-grey-inactive' : 'bg-dark'
        } absolute w-1/2 h-1/2 right-0.5 bottom-0.5`}
      ></div>
    </button>
  );
}

export default MiniGameButton;
