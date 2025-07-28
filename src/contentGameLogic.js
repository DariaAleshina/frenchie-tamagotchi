export const gameTitle = 'Frenchie Tamagotchi';

export const stateList = ['gameOver', 'happy', 'normal', 'sad', 'tired', 'hungry', 'playing', 'sleeping', 'eating', 'enjoyingearrubs'];

export const statusMessage = {
    happy: 'Frenchie is Very Happy!',
    sad: 'Frenchie Got Sad. Help Him!',
    tired: 'Frenchie is Exhausted',
    hungry: 'Frenchie is Hungry',
    normal: 'Frenchie Needs Attention',
    gameOver: 'Oh no! Game Over – Start Again',
    playing: '...tap tap..',
    sleeping: '...zzZ...',
    eating: '...nom nom...',
    enjoyingearrubs: '...urrr...',
};

export const gameRules = {
    title: 'How to Care for Frenchie',
    rules: [
        {
            emoji: '⏳',
            text: 'Stats slowly decrease over time – stay attentive!'
        },
        {
            emoji: '🍖',
            text: 'Feed to fill the belly & boost energy. Available when moderately hungry.'
        },
        {
            emoji: '🎾',
            text: 'Play to increase happiness – but it tires Frenchie.'
        },
        {
            emoji: '🤲',
            text: 'Rub his ears to gently boost happiness.'
        },
        {
            emoji: '😴',
            text: 'Let Frenchie sleep to restore energy. Available when energy drops.'
        },
        {
            emoji: '🕒',
            text: 'Buttons need cooldown after each use – choose wisely.'
        },
        {
            emoji: '🐶',
            text: "Keep stats above 0 – otherwise, it's game over!"
        },
        {
            emoji: '⏩',
            text: "Set how fast the game runs by toggling the mode switch."
        },
    ],
};