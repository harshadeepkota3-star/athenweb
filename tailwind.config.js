/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./{App,index,constants,types}.{ts,tsx}",
        "./{components,services}/**/*.{ts,tsx,js,jsx}",
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
