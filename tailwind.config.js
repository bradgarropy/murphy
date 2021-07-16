const config = {
    mode: "jit",
    purge: ["./src/**/*.html", "./src/**/*.svelte"],
    theme: {
        colors: {
            trueBlack: "#000000",
            black: "#312221",
            gray: "#8D8F91",
            silver: "#B6B8B9",
            offWhite: "#EAEBEB",
            white: "#FFFFFF",
            yellow: "#F7CB1D",
            red: "#CB152B",
            green: "#3F8445",
        },
        fontFamily: {
            header: ["Rowdies", "cursive"],
            body: ["Roboto", "sans-serif"],
        },
        extend: {
            fontSize: {
                "7xl": "5rem",
            },
            scale: {
                300: "3",
            },
            gridTemplateRows: {
                layout: "auto 1fr",
                timer: "50fr 35fr 15fr",
                stats: "auto 1fr",
                settings: "85fr 15fr",
                completed: "repeat(3, auto)",
                details: "repeat(3, auto)",
                workouts: "auto 1fr",
            },
            gridTemplateColumns: {
                form: "repeat(2, auto)",
                round: "repeat(3, auto)",
                workout: "repeat(2, auto)",
            },
            keyframes: {
                spin: {
                    "0%": {transform: "rotate(0deg)"},
                    "100%": {transform: "rotate(-360deg)"},
                },
            },
        },
    },
    variants: {
        cursor: ["responsive", "hover", "focus", "disabled"],
        backgroundColor: ["responsive", "hover", "focus", "disabled"],
    },
    plugins: [],
}

module.exports = config
