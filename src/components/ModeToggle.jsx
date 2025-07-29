function ModeToggle({ isModeFast, onModeChange }) {
  return (
    <div className="text-sm flex border-2 justify-between items-center p-0.5">
      <div className="relative z-0 flex justify-between items-center gap-1 overflow-hidden [transform-style:preserve-3d] [backface-visibility:hidden]">
        <span
          className={`absolute bg-yellow-shadow w-1/2 h-full z-0 transition-transform duration-700 left-0 will-change-transform pointer-events-none mix-blend-multiply ${
            isModeFast ? 'translate-x-full' : 'translate-x-0'
          }
          `}
          aria-hidden="true"
        />
        <button
          className="relative px-1 py-0.5 z-10 cursor-pointer focus:outline-none focus:text-yellow-dark hover:text-yellow-dark"
          onClick={() => onModeChange(false)}
          aria-pressed={!isModeFast}
          aria-label="Switch to slow mode"
        >
          slow
        </button>
        <button
          className="relative px-1 py-0.5 z-10 cursor-pointer focus:outline-none focus:text-yellow-dark hover:text-yellow-dark"
          onClick={() => onModeChange(true)}
          aria-label="Switch to fast mode"
          aria-pressed={isModeFast}
        >
          fast
        </button>
      </div>
    </div>
  );
}

export default ModeToggle;
