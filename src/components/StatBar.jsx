export default function StatBar({ fullness, happiness, energy }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 gap-3 text-3xl">
      <p>🎾 Happiness: {happiness}</p>
      <p>🛏️ Energy: {energy}</p>
      <p>🍖 Fullness: {fullness}</p>
    </div>
  );
}
