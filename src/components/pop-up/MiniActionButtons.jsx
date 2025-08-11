import { useGame } from '../../contexts/GameContext';
import GameButton from '../GameButton';
import ResetButton from '../ResetButton';

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
    <div className="flex flex-col justify-center items-center gap-2 p-2">
      <GameButton action={handlePlay} inactive={isGameOver || playDisabled}>
        🎾
      </GameButton>
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
      <ResetButton isSmall={true} />
    </div>
  );
}

export default MiniActionButtons;
