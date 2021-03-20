import React from 'react'

import { Button, ProjectLinkButton, ResumeButton } from '~/client/styles/button'

export default ({ text }) => <Button>{text}</Button>
export const SubmitButton = ({ text }) => <Button type='submit'>{text}</Button>

const determineProjectButtonLink = ({ code, youtube, demo }) =>
  code ? code : youtube ? youtube : demo

const determineProjectButtonText = ({ code, youtube }) =>
  code ? 'code' : youtube ? 'youtube' : 'demo'

export const ProjectLink = ({ link }) => {
  const href = determineProjectButtonLink(link)
  const text = determineProjectButtonText(link)

  return (
    <a href={href} target='_blank' rel='noopener'>
      <ProjectLinkButton>{text}</ProjectLinkButton>
    </a>
  )
}
