/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Dark_cyan: "hsl(185, 75%, 39%)",
                c_Very_dark_desaturated_blue: "hsl(229, 23%, 23%)",
                c_Dark_grayish_blue: "hsl(227, 10%, 46%)",
                c_Dark_gray: "hsl(0, 0%, 59%)",
            },
            fontFamily: {
                kumbh: ["Kumbh Sans", "sans-serif"]
            }
        },
    },
    plugins: [],
}

