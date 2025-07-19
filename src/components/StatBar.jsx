import '../App.css';

export default function StatBar({ fullness, happiness, energy }) {
  return (
    <div className="font-[Anta] flex flex-row  gap-6 md:gap-14 md:text-2xl lg:gap-24 lg:text-3xl">
      <StatElement score={happiness}>Happiness</StatElement>
      <StatElement score={energy}>Energy</StatElement>
      <StatElement score={fullness}>Fullness</StatElement>
    </div>
  );
}

function StatElement({ children, score }) {
  let scoreColor;
  //   if (score <= 50) scoreColor = 'text-[#C18A26]';
  if (score <= 50) scoreColor = 'text-yellowText';
  if (score <= 30) scoreColor = 'text-[#F25A51]';

  return (
    <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
      <p>{children}</p>
      <p className={scoreColor}>{score}</p>
    </div>
  );
}
