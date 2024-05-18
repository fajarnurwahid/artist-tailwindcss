/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: {
                    50: "#fffbf5",
                    100: "#fff6eb",
                    200: "#ffe6cf",
                    300: "#ffd2b3",
                    400: "#ffa078",
                    500: "#ff5c3c",
                    600: "#e65032",
                    700: "#bf3a22",
                    800: "#992715",
                    900: "#73190d",
                    950: "#4a0c05",
                },
            },
            animation: {
                trusted: "trusted 20s linear infinite",
            },
            keyframes: {
                trusted: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-50% - 16px))" },
                },
            },
        },
    },
    plugins: [],
};
