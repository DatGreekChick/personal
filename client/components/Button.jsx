import React from 'react'

import Link from '~/client/components/Link'

import { Button, ProjectLinkButton, SubmitButton } from '~/client/styles/button'

export default ({ text }) => <Button>{text}</Button>
export const Submit = () => <SubmitButton type='submit'>Submit</SubmitButton>

const determineProjectButtonLink = ({ code, youtube, demo }) =>
  code ? code : youtube ? youtube : demo

const determineProjectButtonText = ({ code, youtube }) =>
  code ? 'code' : youtube ? 'youtube' : 'demo'

export const ProjectLink = ({ link }) => {
  const href = determineProjectButtonLink(link)
  const text = determineProjectButtonText(link)

  return (
    <Link href={href}>
      <ProjectLinkButton>{text}</ProjectLinkButton>
    </Link>
  )
}
