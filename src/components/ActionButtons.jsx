export function ActionButtons({ children }) {
  return <div className="flex gap-5">{children}</div>;
}

export function GameButton({ children, action, inactive }) {
  const style = `relative bg-dark text-light text-sm/5 py-1 px-2 md:py-2 md:px-4  md:text-2xl  focus:outline-none focus:ring-5 focus:ring-yellow-shadow ${
    !inactive && ' cursor-pointer hover:bg-yellow-2'
  }`;

  return (
    <button disabled={inactive} className={style} onClick={action}>
      {children}
      {inactive && (
        <span className="absolute inset-0 bg-grey-inactive opacity-60 pointer-events-none"></span>
      )}
    </button>
  );
}

export function ResetButton({ isGameOver, onReset }) {
  const style = `cursor-pointer py-2 px-4 hover:text-yellow-1 focus:outline-none focus:ring-5 focus:ring-yellow-shadow  ${
    isGameOver && 'bg-yellow-2'
  }`;
  return (
    <button onClick={onReset} className={style}>
      Reset the Game
    </button>
  );
}
