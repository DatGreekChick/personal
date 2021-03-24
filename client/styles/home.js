import styled from 'styled-components'

import TextTransition from 'react-text-transition'

export const Me = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5% 5% 7% 3%;
  margin-left: 55%;
  font-size: 18pt;
  flex-direction: column;

  @media (min-width: 0px) and (max-width: 320px) {
    font-size: 12pt;
    padding: 5% 0 0 6%;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    font-size: 16pt;
  }

  @media (min-width: 0) and (max-width: 1024px) {
    margin: 0 auto;
  }
`

export const Carousel = styled(TextTransition)`
  font-weight: 600;
  color: #e0bf9f;
`

export const Description = styled.p`
  font-size: 15pt;
  font-weight: 300;
  margin-top: 10%;
  padding-bottom: 3%;

  @media (min-width: 0px) and (max-width: 319px) {
    font-size: 12pt;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 13pt;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    margin-top: 5%;
    padding-bottom: 1%;
  }
`
