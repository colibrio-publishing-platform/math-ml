import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

export default [
  {
    input: 'dist/all.js',
    output: {
      file: `dist/bundled/mathml.min.js`,
      format: 'cjs',
      name: 'mathml'
    },
    onwarn,
    plugins: [resolve()]
    // plugins: [resolve(), minify({ comments: false })]
  },
  {
    input: 'dist/polyfill.js',
    output: {
      file: `dist/bundled/mathml.polyfill.js`,
      format: 'cjs',
      name: 'mathmlPolyfill'
    },
    onwarn,
    plugins: []
    // plugins: [minify({ comments: false })]
  }
];