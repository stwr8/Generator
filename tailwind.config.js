/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/Images/hero_car.png')",
                "hero-gradient":
                    "radial-gradient(50.01% 50.00% at 62.40% 50.00%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.69) 100%)",
            },
            boxShadow: {
                "card_shadow": "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
    plugins: [],
};
