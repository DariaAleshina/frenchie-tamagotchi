function Hyperlink({ children }) {
  return (
    <a
      className="
      font-pixel text-yellow-dark px-0.5
      hover:text-grey-inactive
      active:text-grey-inactive
      focus:outline-none focus:ring-3 focus:ring-yellow-shadow"
      href="https://github.com/DariaAleshina/frenchie-tamagotchi"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Hyperlink;
