import React from 'react'

import { useFetchProjectsQuery } from '~/api/index'
import windowTrick from '~/client/window'

import { ProjectLink } from '~/client/components/Button'
import Link from '~/client/components/Link'
import useExpansion from '~/client/hooks/useExpansion'

import { ResumeButton } from '~/client/styles/button'
import {
  Description,
  Detail,
  Lines,
  ProjectStyle,
  Role,
  Tech,
} from '~/client/styles/work'

const Work = () => {
  windowTrick()

  const { toggle, isExpanded, expandedItem } = useExpansion()
  const { data: projects } = useFetchProjectsQuery()

  return (
    <>
      <Link href='/assets/EleniArvanitisKoniorResume.pdf'>
        <ResumeButton>View Resume</ResumeButton>
      </Link>
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
                  <ProjectLink key={`${name}-${link}${i}`} link={link} />
                ))}
              </Detail>
            )}
          </ProjectStyle>
        ))}
    </>
  )
}

export default Work
