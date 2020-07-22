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
            inset: {
                "middle": "50%",
                "20": "20px",
            },
            gridTemplateRows: {
                layout: "auto 1fr",
                timer: "50fr 35fr 15fr",
            },
        },
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "disabled"],
    },
    plugins: [],
}

module.exports = config
