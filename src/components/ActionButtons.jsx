export function ActionButtons({ children }) {
  return <div className="flex gap-5">{children}</div>;
}

export function GameButton({ children, action, inactive }) {
  const style = `relative bg-[#2D2F2C] text-[#FCF6E2] text-sm/5 py-1 px-2 md:py-2 md:px-4  md:text-2xl ${
    !inactive && ' cursor-pointer hover:bg-[#D79F3B]'
  }`;

  return (
    <button disabled={inactive} className={style} onClick={action}>
      {children}
      {inactive && (
        <span className="absolute inset-0 bg-[#797979] opacity-60 pointer-events-none"></span>
      )}
    </button>
  );
}
