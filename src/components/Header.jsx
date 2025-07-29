import Heading from './Heading';

function Header({ children }) {
  return (
    <header>
      <div className="flex justify-between mb-5">
        <nav className="flex justify-center items-center">
          <NavLink linkToSection="game-rules">Game Rules</NavLink>
        </nav>
        <div className="flex items-center justify-center gap-5">{children}</div>
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
      hover:text-yellow-dark
      active:text-yellow-1
      focus:outline-none focus:ring-3 focus:ring-yellow-shadow"
      href={`#${linkToSection}`}
    >
      {children}
    </a>
  );
}
