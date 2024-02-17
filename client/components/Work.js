import React, { useEffect, useState } from 'react'

import { EventType } from '~/lib/workerTypes.js'

import Link from '~/client/components/Link'
import Loading from '~/client/components/Loading'
import { ProjectLink } from '~/client/components/Button'
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

const WORKER = new Worker(new URL('~/lib/worker.js', import.meta.url))

const Work = () => {
  const [projects, setProjects] = useState([])
  const { toggle, isExpanded, expandedItem } = useExpansion()

  useEffect(() => {
    if (!window.Worker) return

    WORKER.postMessage({ eventType: EventType.FETCH_DATA })
  }, [])

  useEffect(() => {
    // Set up event listener for messages from the worker
    WORKER.onmessage = event => {
      setProjects(event.data.projects)
    }

    return () => WORKER.terminate()
  }, [])

  return (
    <>
      <Link href='/assets/EleniArvanitisKoniorResume.pdf'>
        <ResumeButton>View Resume</ResumeButton>
      </Link>
      {!projects.length && <Loading />}
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
