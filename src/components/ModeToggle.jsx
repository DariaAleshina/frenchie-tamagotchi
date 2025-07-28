function ModeToggle() {
  return (
    <div className="text-sm flex border-2 justify-between items-center p-0.5">
      <div className="relative z-0 flex justify-between items-center gap-1">
        <span className="absolute bg-yellow-3 w-1/2 h-full right-0 z-1 transition-all duration-700" />
        <button className="relative px-1 py-0.5 z-2 focus:outline-none focus:inset-ring-3 focus:inset-ring-red-1">
          slow
        </button>
        <button className="relative px-1 py-0.5 z-2 focus:outline-none focus:inset-ring-3 focus:inset-ring-red-1">
          fast
        </button>
      </div>
    </div>
  );
}

export default ModeToggle;
