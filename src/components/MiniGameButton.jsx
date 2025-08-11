import ReactDOM from 'react-dom/client';
import MiniGameApp from './pop-up/MiniGameApp';
import { GameProvider } from '../contexts/GameContext';

function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    try {
      // CSS rules directly in <style> tags
      if (styleSheet.cssRules) {
        const newStyle = targetDoc.createElement('style');
        Array.from(styleSheet.cssRules).forEach(rule => {
          newStyle.appendChild(targetDoc.createTextNode(rule.cssText));
        });
        targetDoc.head.appendChild(newStyle);
      } else if (styleSheet.href) {
        // Linked CSS
        const newLink = targetDoc.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = styleSheet.href;
        targetDoc.head.appendChild(newLink);
      }
    } catch (e) {
      console.warn('Could not access stylesheet:', e);
    }
  });
}

async function handleOpenPiPGame() {
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

function MiniGameButton() {
  return (
    <button
      className="relative cursor-pointer border-2 w-10 h-full"
      aria-label="Open Mini Game in pop-up window"
      onClick={handleOpenPiPGame}
    >
      <div className="bg-dark absolute w-1/2 h-1/2 right-0"></div>
    </button>
  );
}

export default MiniGameButton;
