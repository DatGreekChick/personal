const windowTrick = () =>
  window && typeof window === 'object' ? window.scroll(0, 0) : {}

export default windowTrick
