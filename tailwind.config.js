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
        fontFamily: {
            montserrat: ['"Montserrat", "sans-serif'],
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/Images/hero_car.png')",
                "contact-pattern": "url('/Images/contactbg.png')",
                "hero-first": "url('/Images/hero_car1.png')",
                "hero-first-mobile": "url('/Images/hero_car_mobile1.png')",
                "hero-second": "url('/Images/hero_car2.png')",
                "hero-second-mobile": "url('/Images/hero_car_mobile2.png')",
                "hero-third": "url('/Images/hero_car3.png')",
                "hero-third-mobile": "url('/Images/hero_car_mobile3.png')",
                "hero-fourth": "url('/Images/hero_car4.png')",
                "hero-fourth-mobile": "url('/Images/hero_car_mobile4.png')",
                "hero-fifth": "url('/Images/hero_car5.png')",
                "hero-fifth-mobile": "url('/Images/hero_car_mobile5.png')",
                "hero-gradient":
                    "radial-gradient(50.01% 50.00% at 62.40% 50.00%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.69) 100%)",
            },
            backgroundColor: {
                "input-bg": "rgba(71, 98, 255, 0.08)",
                "input-bg-contact": "rgba(255, 255, 255, 0.10)",
                "input-bg-footer": "rgba(255, 255, 255, 0.00)",
            },
            boxShadow: {
                card_shadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
            },
            colors: {
                "link-color": "rgba(255, 255, 255, 0.80)",
                "text-color": "rgba(51, 51, 51, 0.80)",
            },
        },
    },
    plugins: [],
};
