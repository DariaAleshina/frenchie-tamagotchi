import ReactDOM from 'react-dom/client';
import MiniGameApp from './MiniGameApp';
import { GameProvider } from '../../contexts/GameContext';
import { copyStyles } from './copyStyles';

export default async function openPiPGame() {
  const pipWindow = await documentPictureInPicture.requestWindow({
    width: 300,
    height: 200,
  });
  if (!pipWindow) return;

  copyStyles(document, pipWindow.document);

  const root = ReactDOM.createRoot(pipWindow.document.body);
  root.render(
    <GameProvider>
      <MiniGameApp />
    </GameProvider>
  );
}
