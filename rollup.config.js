import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './scripts/src/scripts.js',
  output: {
      file: './scripts/scripts.min.js',
      format: 'iife',
      name: 'ywtf'
  },
  plugins: [nodeResolve()]
}