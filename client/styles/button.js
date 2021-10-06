import styled from 'styled-components'

export const Button = styled.button`
  flex: 1 1 auto;
  margin: 10px auto;
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

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: medium;
  }
`

export const ResumeButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
`

export const ProjectLinkButton = styled(Button)`
  margin: 4% 1% 0 1%;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 7% 1% 0 1%;
  }
`

export const SubmitButton = styled(Button)`
  margin: 10% auto;
  padding: 4% 12%;
`
