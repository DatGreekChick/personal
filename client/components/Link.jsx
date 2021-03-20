import React from 'react'

export default props => (
  <a rel='noopener' target='_blank' {...props}>
    {props.children}
  </a>
)
