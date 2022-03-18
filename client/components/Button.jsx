import React from 'react'

import Link from '~/client/components/Link'

import { Button, ProjectLinkButton, SubmitButton } from '~/client/styles/button'

export default ({ text }) => <Button>{text}</Button>
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
