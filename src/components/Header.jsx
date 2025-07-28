import Heading from './Heading';

function Header() {
  return (
    <header>
      <div className="flex justify-between mb-5">
        <nav>
          <NavLink linkToSection="game-rules">Game Rules</NavLink>
        </nav>
        <div>
          <button title="Toggle theme">🔥</button>
        </div>
      </div>
      <Heading />
    </header>
  );
}

export default Header;

function NavLink({ children, linkToSection }) {
  return (
    <a
      className="
      px-0.5
      hover:text-yellow-1
      active:text-yellow-1
      focus:outline-none focus:ring-3 focus:ring-yellow-shadow"
      href={`#${linkToSection}`}
    >
      {children}
    </a>
  );
}
