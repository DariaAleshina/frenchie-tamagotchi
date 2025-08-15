// src/utils/gameSync.js
export function createGameSyncChannel(onMessage) {
    if (!('BroadcastChannel' in window)) {
        console.warn('BroadcastChannel not supported');
        return null;
    }

    const channel = new BroadcastChannel('game-sync');

    channel.onmessage = (event) => {
        const data = event.data;
        if (!data?.type) return;
        onMessage(data);
    };

    return channel;
}

export function broadcastState(channel, state) {
    if (!channel) return;
    channel.postMessage({ type: 'STATE_UPDATE', payload: state });
}

export function broadcastAction(channel, action) {
    if (!channel) return;
    channel.postMessage({ type: 'DISPATCH_ACTION', payload: action });
}

export function broadcastPiPStatus(channel, isPiPOpened) {
    if (!channel) return;
    channel.postMessage({ type: 'PIP_STATUS', payload: isPiPOpened });
}
