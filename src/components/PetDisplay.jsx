import happyImg from '../assets/frenchie-happy.png';
import sadImg from '../assets/frenchie-sad.png';
import sleepyImg from '../assets/frenchie-sleepy.png';
import hungryImg from '../assets/frenchie-hungry.png';
import normalImg from '../assets/frenchie-normal.png';
import gameOverImg from '../assets/frenchie-gameover.png';

export default function PetDisplay({
  fullness,
  happiness,
  energy,
  isGameOver,
}) {
  let status = '';
  let image;

  if (isGameOver) {
    image = gameOverImg;
  }

  if (!isGameOver) {
    if (happiness > 80) {
      status = 'Happy';
      image = happyImg;
    }
    if (happiness <= 80) {
      status = 'Feels Good, but Needs Attention';
      image = normalImg;
    }
    if (happiness < 40) {
      status = 'Got Sad... Help Him!';
      image = sadImg;
    }

    if (energy <= 50) {
      status = 'Wants to Sleep';
      image = sleepyImg;
    }

    if (fullness < 40) {
      status = 'Hungry';
      image = hungryImg;
    }
  }

  return (
    <>
      <img className="w-3/5 md:w-2xs" alt="Frenchie emotion" src={image} />
      {isGameOver ? (
        <p className="font-[Anta] lg:text-2xl">
          Oh, No! Game Over – Start Again{' '}
        </p>
      ) : (
        <p className="font-[Anta] lg:text-2xl">Frenchie is {status}</p>
      )}
    </>
  );
}
