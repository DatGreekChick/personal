import { Link } from '~/client/components/Link'

import {
  ProjectLinkButton,
  StyledButton,
  SubmitButton,
} from '~/client/styles/button'

export const Button = ({ text }) => <StyledButton>{text}</StyledButton>
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
