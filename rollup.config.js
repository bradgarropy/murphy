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
const watch = !!process.env.ROLLUP_WATCH

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
            STRIPE_PK: production
                ? process.env.STRIPE_PK_LIVE
                : process.env.STRIPE_PK_TEST,
            STRIPE_PRICE: production
                ? process.env.STRIPE_PRICE_LIVE
                : process.env.STRIPE_PRICE_TEST,
        }),
        commonjs(),
        copy({
            targets: [
                {src: "static/*", dest: path},
                {src: "static/.*", dest: path},
            ],
        }),
        production && terser(),
        watch &&
            serve({
                contentBase: path,
                port: 5000,
                historyApiFallback: true,
            }),
        watch && livereload(path),
    ],
}

export default config
