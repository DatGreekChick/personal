import React from 'react'

import { StyledLink } from '~/client/styles/link'

const Link = props => (
  <StyledLink rel='noopener' target='_blank' {...props}>
    {props.children}
  </StyledLink>
)

export default Link
