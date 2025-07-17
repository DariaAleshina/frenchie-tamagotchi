export default function ActionButtons({ onFeed, onPlay, onSleep, isGameOver }) {
  return (
    <div className="flex gap-5">
      <GameButton action={onFeed} isGameOver={isGameOver}>
        Feed 🍖
      </GameButton>
      <GameButton action={onPlay} isGameOver={isGameOver}>
        Play 🎾
      </GameButton>
      <GameButton action={onSleep} isGameOver={isGameOver}>
        Sleep 😴
      </GameButton>
    </div>
  );
}

function GameButton({ children, action, isGameOver }) {
  const style = `bg-[#2D2F2C] text-[#FCF6E2] py-2 px-4  md:text-2xl ${
    !isGameOver && ' cursor-pointer hover:bg-[#D79F3B]'
  }`;

  return (
    <button disabled={isGameOver} className={style} onClick={action}>
      {children}
    </button>
  );
}
