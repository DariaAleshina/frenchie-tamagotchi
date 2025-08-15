
import { useEffect } from "react";
import { useGame } from "../contexts/GameContext";
import { STORAGE_KEY } from "../helpers/constants";

function loadGameState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const parsed = JSON.parse(savedState);
        return { ...parsed };
    }
    return null;
}
function useStateFromLocalStorage(controlView = 'MAIN') {
    const { dispatch, isPiPOpened } = useGame();
    const setToOpened = controlView === 'PIP';
    console.log(controlView, 'setToOpen:', setToOpened)
    useEffect(() => {
        if (controlView === 'MAIN' && isPiPOpened) return;
        const savedState = {
            ...loadGameState(),
            isPiPOpened: setToOpened,
            feedDisabled: false,
            playDisabled: false,
            sleepDisabled: false,
            rubsDisabled: false,
        };
        console.log(savedState);

        if (!savedState) return;
        dispatch({ type: 'localStorageLoaded', payload: savedState });

        if (savedState.activatedAction) {
            setTimeout(() => {
                dispatch({ type: 'stopAction' });
            }, 3000);
        }
    }, [dispatch, isPiPOpened, controlView, setToOpened]);

}

export default useStateFromLocalStorage

