import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { cleandir } from "rollup-plugin-cleandir";

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: 'lib/bundle.cjs.min.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'lib/bundle.esm.min.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: 'lib/bundle.umd.min.js',
                format: 'umd',
                name: 'MyBundle',
                sourcemap: true,
            }
        ],
        plugins: [
            cleandir('./lib'), 
            esbuild({
                minify: true,
            })
        ]
    },
    {
        input: 'src/main.ts',
        output: [
            {
                file: `lib/bundle.d.ts`,
                format: 'esm',
            },
        ],
        plugins: [dts()]
    }
]