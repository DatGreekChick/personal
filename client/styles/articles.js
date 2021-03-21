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
`

export const Article = styled.div`
  padding: 10px 20%;

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 10px 8%;
  }
`
