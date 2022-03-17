const { isHot } = require('./env.config')

const plugins = [
  '@babel/plugin-transform-runtime',
  'babel-plugin-styled-components',
]

const babel = (module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, forceAllTransforms: true }],
    '@babel/preset-react',
  ],
  plugins: isHot(process.env)
    ? ['react-hot-loader/babel', ...plugins]
    : plugins,
})
