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
      message = 'Happy';
      image = happyImg;
    }
    if (happiness < 80) {
      message = 'Feels Good';
      image = normalImg;
    }
    if (happiness < 40) {
      message = 'Got Sad';
      image = sadImg;
    }

    if (energy < 40) {
      message = 'Sleeping';
      image = sleepyImg;
    }

    if (fullness < 40) {
      message = 'Hungry';
      image = hungryImg;
    }
  }

  return (
    <>
      <img className="w-3/5 md:w-2xs" alt="Frenchie emotion" src={image} />
      {isGameOver ? (
        <p className="font-[Anta] ">Game is Over. Start Again </p>
      ) : (
        <p className="font-[Anta] ">Your Frenchie is {message}</p>
      )}
    </>
  );
}
