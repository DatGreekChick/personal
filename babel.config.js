const { isHot } = require('./env.config')

const babel = module.exports = env => ({
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { modules: false, targets: { uglify: true } }],
      '@babel/preset-react',
    ],
    plugins: isHot(env) && ['react-hot-loader/babel']
  }
})

export default babel