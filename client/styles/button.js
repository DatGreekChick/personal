import styled from 'styled-components'

export const Button = styled.button`
  flex: 1 1 auto;
  margin: 2% auto;
  padding: 10px 25px;
  border: 2px solid #e0bf9f;
  text-align: center;
  text-transform: uppercase;
  font-size: large;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  background-color: transparent;
  color: ghostwhite;
  
  :after {
    position: absolute;
    transition: 0.4s;
    content: '';
    width: 100%;
    bottom: 0;
    background: #e0bf9f;
    height: 120%;
    left: -110%;
    transform: skewX(20deg);
    z-index: -1;
  }
  
  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }
  
  :hover:after {
    left: -10%;
    width: 150%;
  }
  
  :focus {
    outline: none;
  }
`

export const ResumeButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  margin: 4% auto;
`

export const ProjectLinkButton = styled(Button)`
  margin: 4% 2% 0 2%;
`
