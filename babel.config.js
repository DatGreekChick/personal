const { isHot } = require('./env.config')

const plugins = [
  '@babel/plugin-transform-runtime',
  'babel-plugin-styled-components',
  'macros',
  'react-hot-loader/babel',
]

const babel = (module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, forceAllTransforms: true }],
    '@babel/preset-react',
  ],
  plugins,
})
