import { useEffect, useState } from 'react'

import { animated, useTransition } from '@react-spring/web'
import { styled } from 'styled-components'

import { StyledButton, StyledNavLink } from '~/client/styles'

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

const Carousel = styled(animated.div)`
  display: inline-flex;
  white-space: nowrap;
  font-weight: 600;
  color: #e0bf9f;
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
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIdx(Math.floor(Math.random() * Math.floor(ME.length))),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const transitions = useTransition(ME[idx % ME.length], {
    enter: { opacity: 1, transform: 'translateY(0%)' },
    from: { opacity: 0, transform: 'translateY(100%)' },
    leave: {
      opacity: 0,
      transform: 'translateY(-100%)',
      position: 'absolute',
    },
  })

  return (
    <Me>
      <span>
        I am{' '}
        {transitions((style, item) => (
          <Carousel style={style}>{item}</Carousel>
        ))}
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
