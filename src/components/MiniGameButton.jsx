import ReactDOM from 'react-dom/client';
import MiniGame from './pop-up/MiniGame';
import { GameProvider } from '../contexts/GameContext';

async function openPiPGame() {
  // Open PiP window
  const pipWindow = await documentPictureInPicture.requestWindow({
    width: 400,
    height: 300,
  });
  if (!pipWindow) return;

  // Inject Tailwind CSS link
  const link = pipWindow.document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/index.css'; // in dev
  // In production, replace with your built CSS path from dist
  pipWindow.document.head.appendChild(link);

  const root = ReactDOM.createRoot(pipWindow.document.body);
  root.render(
    <GameProvider>
      <MiniGame />
    </GameProvider>
  );
}

function MiniGameButton() {
  return (
    <button
      className="relative cursor-pointer border-2 w-10 h-full"
      onClick={() => {
        // openMiniGame();
        openPiPGame();
      }}
    >
      <div className="bg-dark absolute w-1/2 h-1/2 right-0"></div>
    </button>
  );
}

export default MiniGameButton;
