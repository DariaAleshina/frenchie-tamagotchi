import PetDisplay from '../PetDisplay';
import ActionButtons from '../ActionButtons';
function MiniGame() {
  return (
    <div className="bg-light w-full h-full flex flex-col justify-center items-center">
      <PetDisplay />
      <ActionButtons />
    </div>
  );
}

export default MiniGame;
