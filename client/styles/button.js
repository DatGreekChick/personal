import { NavLink } from 'react-router'
import { styled } from 'styled-components'

export const StyledButton = styled.button`
  margin: 10px auto 10px 0;
  padding: 10px 25px;
  border: 2px solid #e0bf9f;
  text-transform: uppercase;
  font-size: large;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  background-color: transparent;
  color: ghostwhite;

  &:after {
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

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }

  &:hover&:after {
    left: -10%;
    width: 150%;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: medium;
  }
`

export const ResumeButton = styled(StyledButton)`
  display: flex;
  margin: 10px auto;

  &:hover a {
    color: rgba(0, 0, 0, 0.9);
  }
`

export const ProjectLinkButton = styled(StyledButton)`
  margin: 4% 1% 0 1%;

  @media (min-width: 0px) and (max-width: 767px) {
    margin: 7% 1% 0 1%;
  }
`

export const SubmitButton = styled(StyledButton)`
  margin: 0 auto 8% auto;
`

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
`
