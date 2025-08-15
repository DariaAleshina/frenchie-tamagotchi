import { useLocalStoragePIP } from '../../hooks/useStateFromLocalStorage';

import PetView from '../../components/PetView';
import MiniActionButtons from './MiniActionButtons';

function MiniGameApp() {
  useLocalStoragePIP();

  return (
    <div className="bg-light w-full h-full flex justify-evenly items-center absolute">
      <PetView />
      <MiniActionButtons />
    </div>
  );
}

export default MiniGameApp;
