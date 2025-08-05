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

export default NavLink;
