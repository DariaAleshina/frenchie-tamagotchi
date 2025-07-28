function ModeToggle({ isModeFast, onModeChange }) {
  return (
    <div className="text-sm flex border-2 justify-between items-center p-0.5">
      <div className="relative z-0 flex justify-between items-center gap-1">
        <span
          className={`absolute bg-yellow-3 w-1/2 h-full ${
            isModeFast ? 'right' : 'left'
          }-0 z-1 transition-all duration-700`}
          aria-hidden="true"
        />
        <button
          className="relative px-1 py-0.5 z-2 focus:outline-none focus:text-yellow-dark hover:text-yellow-dark"
          onClick={() => onModeChange(false)}
          aria-pressed={!isModeFast}
          aria-label="Switch to slow mode"
        >
          slow
        </button>
        <button
          className="relative px-1 py-0.5 z-2 focus:outline-none focus:text-yellow-dark hover:text-yellow-dark"
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
