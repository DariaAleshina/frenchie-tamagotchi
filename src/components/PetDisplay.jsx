import frenchieHappy from '../assets/frenchie-happy.png';
import frenchieSad from '../assets/frenchie-sad.png';
import frenchieSleepy from '../assets/frenchie-sleepy.png';
import frenchieHungry from '../assets/frenchie-hungry.png';
import frenchieNormal from '../assets/frenchie-normal.png';

export default function PetDisplay() {
  let image = frenchieNormal;

  return <img className="w-2xs" alt="Frenchie" src={image} />;
}
