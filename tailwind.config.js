/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'jamsil': ['TheJamsil', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                'noto-sans': ['"Noto Sans KR"', 'ui-sans-serif', 'system-ui'],
                'gmarket': ['GmarketSans', 'monospace'],
            },
        },
    },
    plugins: [],
}