import Hyperlink from './Hyperlink';

function Footer() {
  return (
    <footer className="font-anta font-normal text-sm md:text-base text-center px-4 py-7">
      <Hyperlink href="https://github.com/DariaAleshina/frenchie-tamagotchi">
        Project
      </Hyperlink>
      <span className="mx-1">designed & developed by</span>
      <Hyperlink href="https://www.linkedin.com/in/ddaleshina">
        Daria Aleshina
      </Hyperlink>
    </footer>
  );
}

export default Footer;
