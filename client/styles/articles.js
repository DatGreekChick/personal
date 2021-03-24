import styled from 'styled-components'

export const ArticleTitle = styled.h3`
  color: #e0bf9f;
  font-size: 18pt;
`

export const DatePosted = styled.p`
  font-style: italic;
`

export const Description = styled.p`
  font-size: large;
`

export const StyledHr = styled.hr`
  border-color: #e0bf9f;
  margin-top: 7%;
`

export const Article = styled.div`
  padding: 0.5% 20%;

  @media (min-width: 0px) and (max-width: 319px) {
    padding: 2% 0 0 6%;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 2% 8%;
  }
`
