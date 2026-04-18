import { useEffect, useState } from 'react'

import { keyframes, styled } from 'styled-components'

import { StyledButton, StyledNavLink } from '../styles'

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0%); }
`

const slideOut = keyframes`
  from { opacity: 1; transform: translateY(0%); }
  to { opacity: 0; transform: translateY(-100%); }
`

const Me = styled.div`
  display: flex;
  padding-top: 5%;
  font-size: 18pt;
  flex-flow: column nowrap;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 0px) and (max-width: 320px) {
    font-size: 12pt;
  }
`

const CarouselWrapper = styled.span`
  position: relative;
  display: inline-flex;
`

const Carousel = styled.span`
  display: inline-flex;
  white-space: nowrap;
  font-weight: 600;
  color: #e0bf9f;
  animation: ${({ $leaving }) => ($leaving ? slideOut : slideIn)} 300ms ease
    forwards;
  ${({ $leaving }) => $leaving && 'position: absolute;'}
`

const Description = styled.p`
  font-size: 14pt;
  font-weight: 300;
  padding-top: 2%;
  padding-bottom: 2%;

  @media (min-width: 0px) and (max-width: 319px) {
    font-size: 12pt;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 13pt;
  }
`

const ME = [
  'a software engineer 👩🏻‍💻',
  'Greek 🇬🇷',
  'an economist 📈',
  'inquisitive 🤔',
  'a gamer 🎮',
  'innovative 💥',
  'a Ravenclaw 🦅',
  'adventurous 🌍',
  'a bassist 🎸',
  'fierce 🔥',
  'a pioneer 🚀',
  'imaginative ⚡️',
  'a STEMinist 👩🏻‍🔬',
]

export const Home = () => {
  const [current, setCurrent] = useState({ text: ME[0], key: 0 })
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIdx = Math.floor(Math.random() * ME.length)
      setCurrent(c => {
        setPrev(c)
        return { text: ME[nextIdx], key: Date.now() }
      })
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Me>
      <span>
        I am{' '}
        <CarouselWrapper>
          <Carousel key={current.key}>{current.text}</Carousel>
          {prev && (
            <Carousel
              $leaving
              key={prev.key}
              onAnimationEnd={() => setPrev(null)}
            >
              {prev.text}
            </Carousel>
          )}
        </CarouselWrapper>
      </span>
      <Description>
        After graduating from NYU with a B.A. in Economics, I decided to tap
        into my creative side and follow in my parents&apos; entrepreneurial
        footsteps by launching a graphic design company. I learned so much
        during that time, but everything I created was static. Craving to expand
        my technical capabilities coupled with a desire to build dynamic apps
        and a love for languages, I became a software engineer.
        <p>
          Presently, I&apos;m working as a Senior Staff Software Engineer
          focused on building elegant and intelligent customer experiences,
          leading cross-company collaboration, and driving performance
          improvements at Cisco Systems!
        </p>
      </Description>
      <StyledButton>
        <StyledNavLink to='/contact' />
        Say hi
      </StyledButton>
    </Me>
  )
}
