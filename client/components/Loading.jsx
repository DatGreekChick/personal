import { keyframes, styled } from 'styled-components'

const CIRCUMFERENCE = 242.776657104492
const PATH =
  'M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z'
const COLOR = '#e0bf9f'

const spin = keyframes`
  12.5% {
    stroke-dasharray: ${CIRCUMFERENCE * 0.14}px, ${CIRCUMFERENCE}px;
    stroke-dashoffset: -${CIRCUMFERENCE * 0.11}px;
  }
  43.75% {
    stroke-dasharray: ${CIRCUMFERENCE * 0.35}px, ${CIRCUMFERENCE}px;
    stroke-dashoffset: -${CIRCUMFERENCE * 0.35}px;
  }
  100% {
    stroke-dasharray: ${CIRCUMFERENCE * 0.01}px, ${CIRCUMFERENCE}px;
    stroke-dashoffset: -${CIRCUMFERENCE * 0.99}px;
  }
`

const AnimatedPath = styled.path`
  stroke-dasharray: ${CIRCUMFERENCE * 0.01}px, ${CIRCUMFERENCE}px;
  stroke-dashoffset: 0;
  animation: ${spin} 1.6s linear infinite;
`

const StyledLoading = styled.div`
  display: flex;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
`

export const Loading = () => (
  <StyledLoading>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='200'
      height='100'
      viewBox='0 0 200 100'
      aria-label='infinity-spin-loading'
      role='img'
    >
      <AnimatedPath
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
  </StyledLoading>
)
