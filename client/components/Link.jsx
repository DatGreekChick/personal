import React from 'react'

const Link = props => (
  <a rel='noopener' target='_blank' {...props}>
    {props.children}
  </a>
)

export default Link
