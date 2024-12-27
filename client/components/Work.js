import { useFetchProjectsQuery } from '~/api/index'

import { Link } from '~/client/components/Link'
import { Loading } from '~/client/components/Loading'
import { useExpansion } from '~/client/hooks/useExpansion'

import { CenterStyledButton, ProjectLinkButton } from '~/client/styles/button'
import {
  Description,
  Detail,
  Lines,
  ProjectStyle,
  Role,
  Tech,
} from '~/client/styles/work'

const determineProjectButtonText = link =>
  link.includes('github')
    ? 'code'
    : link.includes('youtube')
      ? 'youtube'
      : 'demo'

export const Work = () => {
  const { toggle, isExpanded, expandedItem } = useExpansion()
  const { data: projects } = useFetchProjectsQuery()

  return (
    <>
      <CenterStyledButton>
        <Link href='/assets/EleniArvanitisKoniorResume.pdf'>View Resume</Link>
      </CenterStyledButton>
      {!projects && <Loading />}
      {projects &&
        projects.map(({ name, role, description, technologies, links }) => (
          <ProjectStyle key={name}>
            <Lines onClick={toggle}>{name.toUpperCase()}</Lines>
            {isExpanded && expandedItem === name.toUpperCase() && (
              <Detail>
                <Role>{role}</Role>
                <Description>{description}</Description>
                <br />
                {technologies.map(technology => (
                  <Tech key={technology}>{technology.toUpperCase()}</Tech>
                ))}
                <br />
                {links.map((link, i) => (
                  <Link key={`${name}-${link}${i}`} href={link}>
                    <ProjectLinkButton>
                      {determineProjectButtonText(link)}
                    </ProjectLinkButton>
                  </Link>
                ))}
              </Detail>
            )}
          </ProjectStyle>
        ))}
    </>
  )
}
