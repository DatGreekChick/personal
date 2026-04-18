import styles from './Loading.module.css'

const PATH =
  'M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z'
const COLOR = '#e0bf9f'

export const Loading = () => (
  <div className={styles.wrapper}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='200'
      height='100'
      viewBox='0 0 200 100'
      aria-label='infinity-spin-loading'
      role='img'
    >
      <path
        className={styles.animatedPath}
        stroke={COLOR}
        fill='none'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d={PATH}
      />
      <path
        opacity='0.07'
        fill='none'
        stroke={COLOR}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d={PATH}
      />
    </svg>
  </div>
)
