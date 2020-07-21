const config = {
    purge: ["./src/**/*.html", "./src/**/*.svelte"],
    theme: {
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
