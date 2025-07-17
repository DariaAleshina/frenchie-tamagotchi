export function GameButton({ children, action }) {
  return (
    <button
      className="bg-[#2D2F2C] hover:bg-[#D79F3B] text-[#FCF6E2] py-2 px-4 text-2xl cursor-pointer"
      onClick={action}
    >
      {children}
    </button>
  );
}
