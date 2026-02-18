/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: '#00ead3',
                'brand-dark': '#050505',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                huge: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
