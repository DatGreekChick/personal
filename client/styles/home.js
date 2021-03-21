import styled from 'styled-components'

import TextTransition from 'react-text-transition'

export const Me = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5% 5% 7% 3%;
  margin-left: 55%;
  font-size: 25px;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: 30px;
    padding: 5% 8% 0 8%;
  }
`

export const Carousel = styled(TextTransition)`
  font-weight: 600;
  color: #e0bf9f;
`

export const Description = styled.p`
  font-size: 15pt;
  font-weight: 300;
  margin: 10% 0 0 0;
  padding: 0 0 10% 0;

  @media (min-width: 320px) and (max-width: 1024px) {
    margin-top: 5%;
    padding-bottom: 5%;
  }
`
