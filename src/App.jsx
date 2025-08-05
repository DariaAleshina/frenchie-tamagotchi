import { GameProvider } from './contexts/GameContext';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import RulesSection from './components/RulesSection';
import Footer from './components/Footer';
import SeparationLine from './components/SeparationLine';

function App() {
  return (
    <>
      <GameProvider>
        <HeroSection>
          <Header />
          <GameSection />
        </HeroSection>
        <SeparationLine />
        <RulesSection />
      </GameProvider>
      <SeparationLine />
      <Footer />
    </>
  );
}

export default App;
