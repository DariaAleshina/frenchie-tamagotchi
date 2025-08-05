import { GameProvider } from './contexts/GameContext';

import Header from './components/Header';
import ModeToggle from './components/ModeToggle';
import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import StatBar from './components/StatBar';
import PetDisplay from './components/PetDisplay';
import {
  ActionButtons,
  GameButton,
  ResetButton,
} from './components/ActionButtons';
import RulesSection from './components/RulesSection';
import Footer from './components/Footer';
import SeparationLine from './components/SeparationLine';

import { mediaAssets } from './mediaAssets';

const MAX_SCORE = 100;
const INITIAL_SCORE = 80;

function App() {
  return (
    <>
      <GameProvider>
        <HeroSection>
          <Header>
            <ModeToggle />
          </Header>
          <GameSection>
            <StatBar
              fullness={fullness}
              happiness={happiness}
              energy={energy}
            />
            <PetDisplay
              fullness={fullness}
              happiness={happiness}
              energy={energy}
              isGameOver={isGameOver}
              activatedAction={activatedAction}
            />
            <ActionButtons>
              <GameButton
                action={handlePlay}
                inactive={isGameOver || playDisabled}
              >
                Play 🎾
              </GameButton>{' '}
              <GameButton
                action={handleRubs}
                inactive={isGameOver || rubsDisabled}
              >
                Ear Rubs 🤲
              </GameButton>
              <GameButton
                action={handleSleep}
                inactive={isGameOver || sleepDisabled || energy > 60}
              >
                Sleep 😴
              </GameButton>
              <GameButton
                action={handleFeed}
                inactive={isGameOver || feedDisabled || fullness > 60}
              >
                Feed 🍖
              </GameButton>
            </ActionButtons>
            <ResetButton />
          </GameSection>
        </HeroSection>
      </GameProvider>
      <SeparationLine />
      <RulesSection />
      <SeparationLine />
      <Footer />
    </>
  );
}

export default App;
