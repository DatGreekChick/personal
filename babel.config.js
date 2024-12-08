const plugins = [
  '@babel/plugin-transform-runtime',
  'babel-plugin-styled-components',
  'macros',
  process.env.NODE_ENV === 'development' && 'react-refresh/babel',
]

const babel = {
  presets: [
    ['@babel/preset-env', { modules: false, forceAllTransforms: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: plugins.filter(Boolean),
}

export default babel
