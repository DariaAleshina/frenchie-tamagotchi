import Heading from './Heading';
import ModeToggle from './ModeToggle';
import NavLink from './NavLink';

function Header() {
  return (
    <header>
      <div className="flex justify-between mb-5">
        <nav className="flex justify-center items-center">
          <NavLink linkToSection="game-rules">Game Rules</NavLink>
        </nav>
        <ModeToggle />
      </div>
      <Heading />
    </header>
  );
}

export default Header;
