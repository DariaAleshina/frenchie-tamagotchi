import Hyperlink from './Hyperlink';

function Footer() {
  return (
    <footer className="font-anta font-normal text-sm md:text-base text-center px-4 py-7">
      <Hyperlink>Project</Hyperlink>
      <span className="mx-1">designed & developed by</span>
      <Hyperlink>Daria Aleshina</Hyperlink>
    </footer>
  );
}

export default Footer;
