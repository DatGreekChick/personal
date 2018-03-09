let windowTrick = () => {}

if (window && typeof window === 'object') {
  windowTrick = () => window.scroll(0, 0)
}

export default windowTrick