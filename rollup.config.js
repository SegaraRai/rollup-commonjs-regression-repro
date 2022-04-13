// @ts-check

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import tsPaths from 'rollup-plugin-tsconfig-paths';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: [/^node:|^_http_common$/],
  plugins: [
    tsPaths({
      tsConfigPath: ['tsconfig.json'],
    }),
    nodeResolve({
      exportConditions: ['node'],
      extensions: ['.js', '.mjs', '.ts', '.json', '.node'],
      preferBuiltins: true,
    }),
    json({
      preferConst: true,
    }),
    esbuild({
      minify: false,
      target: 'node16',
    }),
    commonjs(),
  ],
});
