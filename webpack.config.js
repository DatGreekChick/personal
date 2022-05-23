import { resolve } from 'path'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { GenerateSW } from 'workbox-webpack-plugin'

import babel from './babel.config.js'

const isProd = ({ NODE_ENV }) => NODE_ENV === JSON.stringify('production')
const isHot = env => !isProd(env)

const __dirname = resolve()

const config = env => ({
  entry: './main.js',
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

const plugins = env => {
  const commonPlugins = [new Dotenv({ systemvars: true })]
  return isHot(env)
    ? [...commonPlugins, new ReactRefreshWebpackPlugin()]
    : [
        ...commonPlugins,
        new GenerateSW({
          // these options encourage the ServiceWorkers to get in fast and
          // disallow any straggling "old" ServiceWorkers to hang around
          clientsClaim: true,
          skipWaiting: true,
        }),
      ]
}

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

export default config(process.env)
