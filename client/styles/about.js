import styled from 'styled-components'

export const StyledAbout = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 0px) and (max-width: 319px) {
    padding-right: 1%;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    margin: 0 auto;
    padding-left: 8%;
    padding-right: 8%;
  }
`

export const AboutText = styled.div`
  font-size: 14pt;
`
