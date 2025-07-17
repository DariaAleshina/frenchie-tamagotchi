import { GameButton } from './GameButton';

export default function ActionButtons({ onFeed, onPlay, onSleep }) {
  return (
    <div className="flex gap-5">
      <GameButton action={onFeed}>Feed 🍖</GameButton>
      <GameButton action={onPlay}>Play 🎾</GameButton>
      <GameButton action={onSleep}>Sleep 💤</GameButton>
    </div>
  );
}
