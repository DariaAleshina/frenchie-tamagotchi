import { useGame } from '../contexts/GameContext';
import { stateList, statusMessage } from '../contentGameLogic';
import { mediaAssets } from '../mediaAssets';
import Spinner from './Spinner';
const { video, img } = mediaAssets;

function PetView() {
  const { petDisplayState } = useGame();
  return (
    <div className="relative flex flex-col justify-center items-center w-3/5 md:w-2xs aspect-square bg-yellow-3">
      <Spinner />
      {stateList.map(state => {
        const style = `absolute w-full ${
          state === petDisplayState ? 'block' : 'hidden'
        }`;
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
  );
}

export default PetView;
