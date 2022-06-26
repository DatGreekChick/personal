import styled from 'styled-components'
import TextTransition from 'react-text-transition'

export const Me = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  font-size: 18pt;
  flex-flow: column nowrap;
  margin: 0 auto;
  width: 60%;

  @media (min-width: 0px) and (max-width: 320px) {
    font-size: 12pt;
  }
`

export const Carousel = styled(TextTransition)`
  font-weight: 600;
  color: #e0bf9f;
`

export const Description = styled.p`
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
