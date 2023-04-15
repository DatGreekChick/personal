import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: fixed;
  margin-bottom: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  z-index: 2;
`

export const Copyright = styled.span`
  color: #858686;
`

export const Icon = styled.a`
  padding-left: 12px;

  :hover {
    color: ${props => props.color};
  }
`
