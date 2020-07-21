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
        variants: {
            backgroundColor: ["responsive", "hover", "focus", "disabled"],
        },
        fontFamily: {
            header: ["Rowdies", "cursive"],
            body: ["Roboto", "sans-serif"],
        },
        extend: {
            gridTemplateRows: {
                layout: "auto 1fr",
            },
        },
    },
    variants: {},
    plugins: [],
}

module.exports = config
