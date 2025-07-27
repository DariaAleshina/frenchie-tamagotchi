module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend:
        {
            colors: {
                yellowText: '#C18A26',
                redText: '#F25A51',
            },
            fontFamily: {
                pixel: ['"Pixelify Sans"', 'sans-serif'],
                anta: ['"Anta"', 'sans-serif'],
            },
            screens: {
                // Min height > 44em (705.6px)
                'min-h-44em': { 'raw': '(min-height: 44em)' },
            },
        },
        plugins: [],
    }