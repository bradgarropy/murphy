import copy from "rollup-plugin-copy"
import serve from "rollup-plugin-serve"
import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import livereload from "rollup-plugin-livereload"

const path = "dist"

const config = {
    input: "src/index.js",
    output: {
        file: `${path}/bundle.js`,
        sourcemap: process.env.ROLLUP_WATCH,
    },
    plugins: [
        svelte({dev: process.env.ROLLUP_WATCH}),
        resolve({browser: true}),
        commonjs(),
        copy({targets: [{src: "static/*", dest: path}]}),
        process.env.ROLLUP_WATCH &&
            serve({
                contentBase: path,
                port: 5000,
                historyApiFallback: true,
            }),
        process.env.ROLLUP_WATCH && livereload(path),
    ],
}

export default config
