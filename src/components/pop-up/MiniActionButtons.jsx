import { useGame } from '../../contexts/GameContext';
import GameButton from '../GameButton';

function MiniActionButtons() {
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
    <div className="flex flex-col gap-5">
      <GameButton action={handlePlay} inactive={isGameOver || playDisabled}>
        🎾
      </GameButton>{' '}
      <GameButton action={handleRubs} inactive={isGameOver || rubsDisabled}>
        🤲
      </GameButton>
      <GameButton
        action={handleSleep}
        inactive={isGameOver || sleepDisabled || energy > 60}
      >
        😴
      </GameButton>
      <GameButton
        action={handleFeed}
        inactive={isGameOver || feedDisabled || fullness > 60}
      >
        🍖
      </GameButton>
    </div>
  );
}

export default MiniActionButtons;
