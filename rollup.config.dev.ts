import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { cleandir } from "rollup-plugin-cleandir";

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: 'build/bundle.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'build/bundle.esm.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: 'build/bundle.umd.js',
                format: 'umd',
                name: 'MyBundle',
                sourcemap: true,
            }
        ],
        plugins: [
            cleandir('./build'), 
            esbuild(),
        ]
    },
    {
        input: 'src/main.ts',
        output: [
            {
                file: `build/bundle.d.ts`,
                format: 'esm',
            },
        ],
        plugins: [dts()]
    }
]