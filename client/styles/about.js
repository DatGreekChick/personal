import styled from 'styled-components'

export const About = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 3% 3% 3%;
  margin-right: 60%;

  @media (min-width: 0px) and (max-width: 319px) {
    padding-right: 1%;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    margin: 0 auto;
    padding-left: 8%;
    padding-right: 8%;
  }
`

export const AboutHeader = styled.p`
  font-size: 35pt;
  font-weight: 800;
  margin-bottom: 4%;

  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 30pt;
  }
`

export const AboutText = styled.div`
  font-size: 14pt;
`
