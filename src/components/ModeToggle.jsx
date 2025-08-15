import { useGame } from '../contexts/GameContext';

function ModeToggle() {
  const { isModeFast, dispatch, isPiPOpened } = useGame();

  return (
    <div
      className={`text-sm flex border-2 justify-between items-center p-0.5 ${
        isPiPOpened && 'border-grey-inactive text-grey-inactive'
      }`}
    >
      <div className="relative z-0 flex justify-between items-center gap-1 overflow-hidden [transform-style:preserve-3d] [backface-visibility:hidden]">
        <span
          className={`absolute w-1/2 h-full z-0 transition-transform  duration-700 left-0 will-change-transform pointer-events-none mix-blend-multiply ${
            isModeFast ? 'translate-x-full' : 'translate-x-0'
          } ${isPiPOpened ? 'bg-grey-inactive/30' : ' bg-yellow-3'}
          `}
          aria-hidden="true"
        />
        <button
          className={`relative px-1 py-0.5 z-10  focus:outline-none focus:text-yellow-dark ${
            !isPiPOpened && 'hover:text-yellow-dark cursor-pointer'
          } `}
          onClick={() => dispatch({ type: 'setModeFast', payload: false })}
          aria-label="Switch to slow mode"
          aria-pressed={!isModeFast}
          disabled={isPiPOpened}
        >
          slow
        </button>
        <button
          className={`relative px-1 py-0.5 z-10  focus:outline-none focus:text-yellow-dark ${
            !isPiPOpened && 'hover:text-yellow-dark cursor-pointer'
          } `}
          onClick={() => dispatch({ type: 'setModeFast', payload: true })}
          aria-label="Switch to fast mode"
          aria-pressed={isModeFast}
          disabled={isPiPOpened}
        >
          fast
        </button>
      </div>
    </div>
  );
}

export default ModeToggle;
