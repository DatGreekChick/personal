import React, { useState } from 'react'
import { Sling } from 'hamburger-react'

import { MenuItem, MenuList, StyledNavLink } from '~/client/styles/nav'

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
            <MenuItem key={link}>
              <StyledNavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                onClick={toggleMenu}
              >
                {link}
              </StyledNavLink>
            </MenuItem>
          ))}
        </MenuList>
      )}
    </>
  )
}

export default Hamburger
