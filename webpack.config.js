const webpack = require('webpack')
const babel = require('./babel.config')
const { isHot, isProd } = require('./env.config')
const { GenerateSW } = require('workbox-webpack-plugin')

const entries = (env, entry) =>
  isHot(env) ? ['react-hot-loader/patch', entry] : entry

const config = env => ({
  entry: entries(env, './main.js'),
  mode: isHot(env) ? 'development' : 'production',
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
    hotUpdateChunkFilename: '../hot/hot-update.js',
    hotUpdateMainFilename: '../hot/hot-update.json',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '~': __dirname,
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: devServer(env),
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babel,
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|png|)$/,
        use: 'url-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(txt|md|markdown)$/,
        use: 'raw-loader',
      },
    ],
  },
  optimization: {
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  plugins: plugins(env),
})

const plugins = env =>
  isHot(env)
    ? [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
      ]
    : [
        new GenerateSW({
          // these options encourage the ServiceWorkers to get in there fast
          // and not allow any straggling "old" SWs to hang around
          clientsClaim: true,
          skipWaiting: true,
        }),
      ]

function devServer(env) {
  if (isProd(env)) return
  const { FIREBASE_SERVE_URL } = env
  return {
    disableHostCheck: true,
    hot: true,
    proxy: FIREBASE_SERVE_URL && {
      '/': FIREBASE_SERVE_URL,
    },
  }
}

module.exports = config(process.env)
