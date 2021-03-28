import React from 'react'

import { Link } from '~/client/styles/link'

export default props => (
  <Link rel='noopener' target='_blank' {...props}>
    {props.children}
  </Link>
)
