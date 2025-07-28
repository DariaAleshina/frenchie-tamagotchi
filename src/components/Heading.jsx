import { gameTitle } from '../contentGameLogic';

function Heading() {
  return (
    <h1 className="text-3xl mb-5 md:text-6xl md:mb-5 text-center">
      {gameTitle}
    </h1>
  );
}

export default Heading;
