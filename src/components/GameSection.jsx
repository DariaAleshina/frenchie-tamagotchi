import ActionButtons from './ActionButtons';
import ResetButton from './ResetButton';
import PetDisplay from './PetDisplay';
import StatBar from './StatBar';

function GameSection() {
  return (
    <section className="max-w-3xl mr-auto ml-auto flex justify-center flex-col items-center gap-5">
      <StatBar />
      <PetDisplay />
      <ActionButtons />
      <ResetButton />
    </section>
  );
}

export default GameSection;
