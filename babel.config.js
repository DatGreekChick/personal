const { isHot } = require('./env.config')

const babel = module.exports = env => ({
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { modules: false, targets: { uglify: true } }],
      '@babel/preset-react',
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
    ],
    plugins: isHot(env) && ['react-hot-loader/babel']
  }
})