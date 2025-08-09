// function openMiniGame() {
//   window.open(
//     '/',
//     'MiniFrenchie',
//     'width=360,height=450,resizable=no, left=100, top=100, resizable=yes, scrollbars=no, toolbar=no, menubar=no, location=no, status=no'
//   );
// }

async function openPiPGame() {
  if (!('documentPictureInPicture' in window)) {
    alert('Your browser does not support Document Picture-in-Picture.');
    return;
  }

  // Open PiP window
  const pipWindow = await documentPictureInPicture.requestWindow({
    width: 400,
    height: 300,
  });

  // Inject content
  pipWindow.document.body.innerHTML = `
    <h3>Mini Frenchie 🐶</h3>
  `;
}

function MiniGameButton() {
  return (
    <button
      className="relative cursor-pointer border-2 w-10 h-full"
      onClick={() => {
        // openMiniGame();
        openPiPGame();
      }}
    >
      <div className="bg-dark absolute w-1/2 h-1/2 right-0"></div>
    </button>
  );
}

export default MiniGameButton;
