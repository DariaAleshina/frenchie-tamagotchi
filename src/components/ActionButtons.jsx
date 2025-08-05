import { useGame } from '../contexts/GameContext';
import GameButton from './GameButton';

function ActionButtons() {
  const {
    isGameOver,
    handleFeed,
    handlePlay,
    handleRubs,
    handleSleep,
    playDisabled,
    rubsDisabled,
    sleepDisabled,
    feedDisabled,
    energy,
    fullness,
  } = useGame();

  return (
    <div className="flex gap-5">
      <GameButton action={handlePlay} inactive={isGameOver || playDisabled}>
        Play 🎾
      </GameButton>{' '}
      <GameButton action={handleRubs} inactive={isGameOver || rubsDisabled}>
        Ear Rubs 🤲
      </GameButton>
      <GameButton
        action={handleSleep}
        inactive={isGameOver || sleepDisabled || energy > 60}
      >
        Sleep 😴
      </GameButton>
      <GameButton
        action={handleFeed}
        inactive={isGameOver || feedDisabled || fullness > 60}
      >
        Feed 🍖
      </GameButton>
    </div>
  );
}

export default ActionButtons;
