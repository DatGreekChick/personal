import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { Sling } from 'hamburger-react'
import { styled } from 'styled-components'

const MenuList = styled.ul`
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ghostwhite;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e0bf9f;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover&:before {
    color: #e0bf9f;
    visibility: visible;
    transform: scaleX(1);
  }

  :active {
    border-bottom: 1.5px solid #e0bf9f;
    color: inherit;
  }
`

const LINKS = ['Home', 'About', 'Work', 'Articles', 'Contact']

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <>
      <Sling
        direction='left'
        toggled={open}
        toggle={toggleMenu}
        label='Toggle menu'
        isOpen={open}
      />
      {open && (
        <MenuList>
          {LINKS.map(link => (
            <li key={link} style={{ margin: 0, padding: '1%' }}>
              <StyledNavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                onClick={toggleMenu}
              >
                {link}
              </StyledNavLink>
            </li>
          ))}
        </MenuList>
      )}
    </>
  )
}

export default Hamburger
