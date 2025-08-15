import { STORAGE_KEY } from "./constants";

function loadFromLocalStorage() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const parsed = JSON.parse(savedState);
        // Validate and merge with default state to handle version changes
        return { ...parsed };
    }
    return null;
}

export { loadFromLocalStorage }