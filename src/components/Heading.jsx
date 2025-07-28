import { gameTitle } from '../contentGameLogic';

function Heading() {
  return (
    <h1 className="text-3xl mb-5 sm:text-4xl md:text-5xl lg:text-6xl md:mb-5 text-center">
      {gameTitle}
    </h1>
  );
}

export default Heading;
