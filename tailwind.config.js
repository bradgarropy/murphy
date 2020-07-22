const config = {
    purge: ["./src/**/*.html", "./src/**/*.svelte"],
    theme: {
        colors: {
            black: "#312221",
            gray: "#8D8F91",
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
                "500": "5",
            },
            inset: {
                "middle": "50%",
                "20": "20px",
            },
            gridTemplateRows: {
                layout: "auto 1fr",
                timer: "50fr 35fr 15fr",
                settings: "85fr 15fr",
            },
            gridTemplateColumns: {
                form: "repeat(2, auto)",
            },
        },
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "disabled"],
    },
    plugins: [],
}

module.exports = config
