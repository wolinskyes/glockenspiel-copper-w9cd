import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: './scripts/src/scripts.js',
    output: {
        file: './scripts/scripts.min.js',
        format: 'iife',
        name: 'ywtf_main'
    },
    plugins: [nodeResolve()]
  },
  {
    input: './scripts/src/learnpage.js',
    output: {
        file: './scripts/learnpage.min.js',
        format: 'iife',
        name: 'ywtf_page_learn'
    },
    plugins: [nodeResolve()]
  },
  {
    input: './scripts/src/eventspage.js',
    output: {
        file: './scripts/eventspage.min.js',
        format: 'iife',
        name: 'ywtf_page_events'
    },
    plugins: [nodeResolve()]
  },
]