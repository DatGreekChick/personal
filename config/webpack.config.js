const webpack = require('webpack')
    , babel = require('./babel.config')
    , { dirname } = require('path')
    , parent = dirname(__dirname)
    , { isHot, isProd } = require('./env.config')
    , SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const config = env => ({
  entry: entries(env, `${parent}/main.js`),
  output: {
    filename: 'bundle.js',
    path: `${parent}/public`,
    hotUpdateChunkFilename: `${parent}/hot/hot-update.js`,
    hotUpdateMainFilename: `${parent}/hot/hot-update.json`,
  },
  context: parent,
  resolve: {
    extensions: [ '.jsx', '.js', '.json' ],
    alias: { '~': parent }
  },
  devServer: devServer(env),
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      use: babel(env),
    }, {
      test: /\.(jpeg|jpg|png|)$/,
      use: 'url-loader',
    }, {
      test: /\.css$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: { minimize: true }
      }],
    }, {
      test: /\.(txt|md|markdown)$/,
      use: 'raw-loader',
    }]
  },
  plugins: plugins(env),
})

const entries = (env, entry) =>
  isHot(env)
    ? ['react-hot-loader/patch', entry]
    : entry

const plugins = env => isHot(env) ? [
  new webpack.HotModuleReplacementPlugin,  // Enable HMR globally
] : [
  new SWPrecacheWebpackPlugin({
    cacheId: 'v1',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'sw.js',
    minify: true,
    navigateFallback: 'https://eleniarvanitis.com/index.html',
    staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
]

function devServer(env) {
  if (isProd(env)) return
  const { FIREBASE_SERVE_URL } = env
  return {
    hot: true,
    proxy: FIREBASE_SERVE_URL && {
      "/": FIREBASE_SERVE_URL
    }
  }
}

module.exports = config(process.env)