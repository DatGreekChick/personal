const { isHot } = require('./env.config')

const plugins = [
  // stage 2
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
  // stage 3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  '@babel/plugin-proposal-json-strings',
]

const babel = module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, forceAllTransforms: true }],
    '@babel/preset-react',
  ],
  plugins: isHot(process.env)
    ? ['react-hot-loader/babel', ...plugins]
    : plugins
}