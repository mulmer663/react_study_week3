/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                pointHover: {
                    raw: "(hover: hover) and (pointer: fine)",
                },
            },
            fontFamily: {
                'jamsil': ['TheJamsil', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                'noto-sans': ['"Noto Sans KR"', 'ui-sans-serif', 'system-ui'],
                'gmarket': ['GmarketSans', 'monospace'],
            },
            height: {
                '100': '25rem',
                '120' : '30rem',
            }
        },
    },
    plugins: [],
}