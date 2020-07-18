import html from "@rollup/plugin-html"
import serve from "rollup-plugin-serve"
import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import livereload from "rollup-plugin-livereload"

const path = "dist"

const config = {
    input: "src/index.js",
    output: {
        file: `${path}/bundle.js`,
    },
    plugins: [
        svelte({dev: process.env.ROLLUP_WATCH}),
        resolve(),
        html(),
        process.env.ROLLUP_WATCH &&
            serve({
                contentBase: path,
                port: 8000,
                historyApiFallback: true,
            }),
        process.env.ROLLUP_WATCH && livereload(path),
    ],
}

export default config
