module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            sans: ["Gilroy-Medium", "Gilroy-Bold", "Gilroy-Light"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "loop-scroll": "loop-scroll 15s linear infinite",
            },
            keyframes: {
                "loop-scroll": {
                    from: {transform: "translateX(0%)"},
                    to: {transform: "translateX(-100%)"},
                },
            },
            screens: {
                mbMini: "290px",
                mbXSmall: "400px",
                mbMedSmall: "500px",
                mbSmall: "600px",
                mbMedium: "800px",
                laptop: "1000px",
                carousel:"932px",
                tbPortrait: "1200px",
                tbLandscape: "1600px",
                Desktop: "2000px",
                lgDesktop: "2400px",
            },
        },
    },
    plugins: [],
};
