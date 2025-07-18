import happyImg from '/img/frenchie-happy.png';
import sadImg from '/img/frenchie-sad.png';
import tiredImg from '/img/frenchie-tired.png';
import hungryImg from '/img/frenchie-hungry.png';
import normalImg from '/img/frenchie-normal.png';
import gameOverImg from '/img/frenchie-gameover.png';

import tiredVideo from '/videos/tired-2.mp4';
import happyVideo from '/videos/happy.mp4';
import normalVideo from '/videos/normal.mp4';
import sadVideo from '/videos/sad.mp4';
import hungryVideo from '/videos/hungry.mp4';

export const mediaAssets = {
    video: {
        happy: happyVideo,
        sad: sadVideo,
        tired: tiredVideo,
        normal: normalVideo,
        hungry: hungryVideo,
    },
    img: {
        gameOver: gameOverImg,
        normal: normalImg,
        hungry: hungryImg,
        tired: tiredImg,
        sad: sadImg,
        happy: happyImg,
    }
};