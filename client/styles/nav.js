import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  top: 0;
  font-size: 23px;
  font-weight: 800;
  color: ghostwhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
  padding: 1rem;
  vertical-align: text-top;
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  min-width: 15%;
  max-height: 30px;
`

export const MenuList = styled.ul`
  list-style: none;
  flex-direction: column;
  text-align: center;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 10%;
  z-index: 1;
  left: 0;
  width: 100%;
  height: calc(100% - 4rem);
  background-color: rgba(0, 0, 0, 1);
`

export const MenuItem = styled.li`
  margin: 0;
  padding: 1%;
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
