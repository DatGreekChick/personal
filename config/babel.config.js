const { isHot } = require('./env.config')

const babel = module.exports = env => ({
  loader: 'babel-loader',
  options: {
    presets: [
      ['env', { modules: false, targets: { uglify: true } }],
      'stage-2',
      'react',
    ],
    plugins: isHot(env) && ['react-hot-loader/babel']
  }
})