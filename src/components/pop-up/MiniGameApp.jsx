import PetDisplay from '../PetDisplay';
import MiniActionButtons from './MiniActionButtons';
function MiniGameApp() {
  return (
    <div className="bg-light w-full h-full flex justify-center items-center">
      <PetDisplay />
      <MiniActionButtons />
    </div>
  );
}

export default MiniGameApp;
