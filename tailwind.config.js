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
        fontSize: {
            "xs": ".75rem",
            "sm": ".875rem",
            "base": "1rem",
            "lg": "1.125rem",
            "xl": "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        extend: {
            gridTemplateRows: {
                layout: "auto 1fr",
                timer: "1fr auto auto",
            },
        },
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "disabled"],
    },
    plugins: [],
}

module.exports = config
