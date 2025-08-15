
import { useEffect } from "react";
import { useGame } from "../contexts/GameContext";

import { loadFromLocalStorage } from "../helpers/functions";

const PLAY_ACTION_SECONDS = 3;

function useLocalStorageMain(isPiPOpened) {
    const { dispatch } = useGame();
    useEffect(() => {
        if (isPiPOpened) return;

        const stateFromLocalStorage = loadFromLocalStorage();
        if (!stateFromLocalStorage) return;
        const newState = {
            ...stateFromLocalStorage,
            isPiPOpened: false,
            feedDisabled: false,
            playDisabled: false,
            sleepDisabled: false,
            rubsDisabled: false,
        };
        dispatch({ type: 'localStorageLoaded', payload: newState });

        if (stateFromLocalStorage.activatedAction) {
            setTimeout(() => {
                dispatch({ type: 'stopAction' });
            }, 1000 * PLAY_ACTION_SECONDS);
        }
    }, [dispatch, isPiPOpened]);
}

function useLocalStoragePIP() {
    const { dispatch } = useGame();
    // loading data from local storage
    useEffect(() => {
        const savedState = {
            ...loadFromLocalStorage(),
            isPiPOpened: true,
            feedDisabled: false,
            playDisabled: false,
            sleepDisabled: false,
            rubsDisabled: false,
        };

        if (!savedState) return;
        dispatch({ type: 'localStorageLoaded', payload: savedState });

        if (savedState.activatedAction) {
            setTimeout(() => {
                dispatch({ type: 'stopAction' });
            }, 1000 * PLAY_ACTION_SECONDS);
        }
    }, [dispatch]);
}

export { useLocalStorageMain, useLocalStoragePIP }