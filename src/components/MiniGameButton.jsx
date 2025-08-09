function openMiniGame() {
  window.open('/', 'MiniFrenchie', 'width=360,height=420,resizable=no');
}

function MiniGameButton() {
  return (
    <button
      className="relative cursor-pointer border-2 w-10 h-full"
      onClick={openMiniGame}
    >
      <div className="bg-dark absolute w-1/2 h-1/2 right-0"></div>
    </button>
  );
}

export default MiniGameButton;
