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
        svelte(),
        resolve(),
        html(),
        !process.env.BUILD && serve(path),
        !process.env.BUILD && livereload(path),
    ],
}

export default config
