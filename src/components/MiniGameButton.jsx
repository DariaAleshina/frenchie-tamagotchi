import openPiPGame from '../features/pip/openPiPGame';

const CONTROL_KEY = 'game-control';

function MiniGameButton() {
  async function handleOpenMiniGame() {
    const pipWindow = await openPiPGame();
    if (!pipWindow) return;
    // dispatch({ type: 'setPiPOpened', payload: true });

    pipWindow.addEventListener('pagehide', () => {
      localStorage.setItem(CONTROL_KEY, 'MAIN');
    });
  }

  return (
    <button
      className="relative cursor-pointer border-2 w-10 h-full"
      aria-label="Open Mini Game in pop-up window"
      title="Open mini-game in pop-up window"
      onClick={handleOpenMiniGame}
    >
      <div className=" bg-dark absolute w-1/2 h-1/2 right-0.5 bottom-0.5"></div>
    </button>
  );
}

export default MiniGameButton;
