import image from "svelte-image"
import copy from "rollup-plugin-copy"
import serve from "rollup-plugin-serve"
import svelte from "rollup-plugin-svelte"
import replace from "rollup-plugin-replace"
import {terser} from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import livereload from "rollup-plugin-livereload"

const path = "dist"
const production = process.env.CONTEXT === "production"
const development = !production
const local = !!process.env.ROLLUP_WATCH

console.log(`production: ${production}`)
console.log(`development: ${development}`)

const config = {
    input: "src/index.js",
    output: {
        file: `${path}/bundle.js`,
        sourcemap: development,
    },
    plugins: [
        svelte({
            dev: development,
            preprocess: {
                ...image({
                    outputDir: "images",
                    publicDir: "static",
                    placeholder: "blur",
                }),
            },
        }),
        resolve({browser: true}),
        replace({
            BASE_URL: production
                ? "https://murphee.netlify.app"
                : "http://localhost:8888",
            STRIPE_PK: production
                ? process.env.STRIPE_PK_LIVE
                : process.env.STRIPE_PK_TEST,
        }),
        commonjs(),
        copy({targets: [{src: "static/*", dest: path}]}),
        production && terser(),
        local &&
            serve({
                contentBase: path,
                port: 5000,
                historyApiFallback: true,
            }),
        local && livereload(path),
    ],
}

export default config
