import React from 'react'

import Link from '~/client/components/Link'

import {
  StyledButton,
  ProjectLinkButton,
  SubmitButton,
} from '~/client/styles/button'

const Button = ({ text }) => <StyledButton>{text}</StyledButton>
export const Submit = props => (
  <SubmitButton type='submit' {...props}>
    Submit
  </SubmitButton>
)

const determineProjectButtonText = link =>
  link.includes('github')
    ? 'code'
    : link.includes('youtube')
    ? 'youtube'
    : 'demo'

export const ProjectLink = ({ link }) => (
  <Link href={link}>
    <ProjectLinkButton>{determineProjectButtonText(link)}</ProjectLinkButton>
  </Link>
)

export default Button
