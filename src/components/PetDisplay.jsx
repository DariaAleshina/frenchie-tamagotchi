import happyImg from '../assets/frenchie-happy.png';
import sadImg from '../assets/frenchie-sad.png';
import sleepyImg from '../assets/frenchie-sleepy.png';
import hungryImg from '../assets/frenchie-hungry.png';
import normalImg from '../assets/frenchie-normal.png';

export default function PetDisplay({
  fullness,
  happiness,
  energy,
  isGameOver,
}) {
  let message = '';
  let image;

  if (isGameOver) {
    image = sadImg;
  }

  if (!isGameOver) {
    if (happiness >= 80) {
      message = 'happy';
      image = happyImg;
    }
    if (happiness < 80) {
      message = 'feels good';
      image = normalImg;
    }
    if (happiness < 40) {
      message = 'got sad';
      image = sadImg;
    }

    if (energy < 40) {
      message = 'sleeping';
      image = sleepyImg;
    }

    if (fullness < 40) {
      message = 'hungry';
      image = hungryImg;
    }
  }

  return (
    <>
      <img className="w-2xs" alt="Frenchie emotion" src={image} />
      {isGameOver ? <p>Game is over</p> : <p>Your Frenchie is {message}</p>}
    </>
  );
}
