import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  top: 0;
  font-size: 23px;
  font-weight: 800;
  color: ghostwhite;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0;
  padding: 1rem 0;
  width: 100%;
  vertical-align: text-top;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
  }
`

export const Logo = styled.img`
  min-width: 25px;
  max-height: 35px;
  display: inline-flex;
  float: left;

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 25px;
    max-height: 40px;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ghostwhite;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e0bf9f;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    color: #e0bf9f;
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  :active {
    border-bottom: 1.5px solid #e0bf9f;
    color: inherit;
  }
`
