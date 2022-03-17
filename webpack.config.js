const webpack = require('webpack')
const { GenerateSW } = require('workbox-webpack-plugin')
const DotEnv = require('dotenv-webpack')

const babel = require('./babel.config')
const { isHot, isProd } = require('./env.config')

const entries = (env, entry) =>
  isHot(env) ? ['react-hot-loader/patch', entry] : entry

const config = env => ({
  entry: entries(env, './main.js'),
  mode: isHot(env) ? 'development' : 'production',
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/public`,
    publicPath: '/',
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
        test: /\.jsx?$/,
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
    runtimeChunk: 'single',
    splitChunks: {
      maxInitialRequests: 20, // for HTTP2
      maxAsyncRequests: 20, // for HTTP2
      minSize: 40,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: plugins(env),
})

const plugins = env =>
  isHot(env)
    ? [
        new DotEnv({ systemvars: true }),
        new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
      ]
    : [
        new DotEnv(),
        new GenerateSW({
          // these options encourage the ServiceWorkers to get in fast and
          // disallow any straggling "old" ServiceWorkers to hang around
          clientsClaim: true,
          skipWaiting: true,
        }),
      ]

function devServer(env) {
  if (isProd(env)) return
  const { FIREBASE_SERVE_URL } = env
  return {
    compress: true,
    allowedHosts: 'all',
    hot: true,
    proxy: FIREBASE_SERVE_URL && {
      '/': FIREBASE_SERVE_URL,
    },
  }
}

module.exports = config(process.env)
