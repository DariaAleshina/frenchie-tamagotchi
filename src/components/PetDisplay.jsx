import { mediaAssets } from '../mediaAssets';
import { stateList, statusMessage } from '../contentGameLogic';

export default function PetDisplay({
  fullness,
  happiness,
  energy,
  isGameOver,
  activatedAction,
}) {
  const { video, img } = mediaAssets;
  let activeState = 'normal';

  if (isGameOver) activeState = 'gameOver';

  if (!isGameOver) {
    if (activatedAction) {
      activeState = activatedAction;
    } else {
      if (happiness > 80) activeState = 'happy';
      if (happiness <= 80) activeState = 'normal';
      if (happiness <= 60 || energy <= 60 || fullness <= 50)
        activeState = 'sad';
      if (energy <= 40) activeState = 'tired';
      if (fullness <= 50) activeState = 'hungry';
    }
  }

  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-3/5 md:w-2xs aspect-square bg-yellow-3">
        {stateList.map(state => {
          const style = `w-full ${state === activeState ? 'block' : 'hidden'}`;
          return state === 'gameOver' ? (
            <img
              className={style}
              alt="Game Over"
              src={img.gameOver}
              key={state}
            />
          ) : (
            <video
              key={state}
              src={video[state]}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={style}
            >
              <img
                src={img[state]}
                alt={statusMessage[state]}
                key={state}
                className={style}
              />
            </video>
          );
        })}
      </div>
      <p className="font-anta lg:text-2xl">{statusMessage?.[activeState]}</p>
    </>
  );
}
