import Heading from './Heading';
import ModeToggle from './ModeToggle';
import NavLink from './NavLink';
import MiniGameButton from './MiniGameButton';

function Header() {
  return (
    <header>
      <div className="flex justify-between mb-5">
        <nav className="flex justify-center items-center">
          <NavLink linkToSection="game-rules">Game Rules</NavLink>
        </nav>
        <div className="flex gap-10">
          <ModeToggle />
          <MiniGameButton />
        </div>
      </div>
      <Heading />
    </header>
  );
}

export default Header;
