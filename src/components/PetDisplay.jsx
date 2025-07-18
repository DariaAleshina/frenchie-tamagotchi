import happyImg from '/img/frenchie-happy.png';
import sadImg from '/img/frenchie-sad.png';
import sleepyImg from '/img/frenchie-sleepy.png';
import hungryImg from '/img/frenchie-hungry.png';
import normalImg from '/img/frenchie-normal.png';
import gameOverImg from '/img/frenchie-gameover.png';

import sleepyVideo from '/videos/sleepy.mp4';
import happyVideo from '/videos/happy.mp4';
import normalVideo from '/videos/normal.mp4';
import sadVideo from '/videos/sad.mp4';

export default function PetDisplay({
  fullness,
  happiness,
  energy,
  isGameOver,
}) {
  let status = '';
  let media;
  let secondaryMedia;

  if (isGameOver) media = gameOverImg;

  if (!isGameOver) {
    if (happiness > 80) {
      status = 'Happy';
      media = happyVideo;
      secondaryMedia = happyImg;
    }
    if (happiness <= 80) {
      status = 'Feels Good, but Needs Attention';
      media = normalVideo;
      secondaryMedia = normalImg;
    }
    if (happiness < 40) {
      status = 'Got Sad... Help Him!';
      media = sadVideo;
      secondaryMedia = sadImg;
    }

    if (energy <= 50) {
      status = 'Wants to Sleep';
      media = sleepyVideo;
      secondaryMedia = sleepyImg;
    }

    if (fullness < 40) {
      status = 'Hungry';
      media = hungryImg;
      secondaryMedia = hungryImg;
    }
  }

  return (
    <>
      {isGameOver ? (
        <>
          <img className="w-3/5 md:w-2xs" alt="Game Over" src={media} />
          <p className="font-[Anta] lg:text-2xl">
            Oh, No! Game Over – Start Again
          </p>
        </>
      ) : (
        <>
          <video
            src={media}
            autoPlay
            muted
            loop
            playsInline
            className="w-3/5 md:w-2xs"
          >
            <img src={secondaryMedia} alt="Frenchie emotion" />
          </video>
          <p className="font-[Anta] lg:text-2xl">Frenchie is {status}</p>
        </>
      )}
    </>
  );
}
