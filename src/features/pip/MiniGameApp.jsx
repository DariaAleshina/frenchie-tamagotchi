import PetView from '../../components/PetView';
import MiniActionButtons from './MiniActionButtons';
function MiniGameApp() {
  return (
    <div className="bg-light w-full h-full flex justify-evenly items-center absolute">
      <PetView />
      <MiniActionButtons />
    </div>
  );
}

export default MiniGameApp;
