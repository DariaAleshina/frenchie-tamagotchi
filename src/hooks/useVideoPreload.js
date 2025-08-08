import { useEffect } from 'react';
import { mediaAssets } from '../mediaAssets';

export function useVideoPreload() {
    useEffect(() => {
        const { video } = mediaAssets;
        const preloadVideo = src => {
            const video = document.createElement('video');
            video.src = src;
            video.preload = 'auto';
        };

        preloadVideo(video.happy);
        preloadVideo(video.sad);
        preloadVideo(video.tired);
        preloadVideo(video.normal);
        preloadVideo(video.hungry);
    }, [])
};