import React, { useState } from 'react'
import { useList } from 'react-firebase-hooks/database'
import { ref } from 'firebase/database'

import Loading from './Loading'
import { ProjectLink } from '~/client/components/Button'
import {
  Project,
  Lines,
  Role,
  Description,
  Detail,
  Tech,
} from '~/client/styles/work'

import db from '~/content/fire'

export default () => {
  const [isHidden, setIsHidden] = useState(true)
  const [selectedProject, setSelectedProject] = useState('')
  const [snapshots, loading, error] = useList(ref(db, 'work'))

  const toggle = evt => {
    const project = evt.target.innerText

    if (!selectedProject) {
      setSelectedProject(project)
    } else if (selectedProject && project !== selectedProject) {
      // if there's a project expanded, but a different project was clicked
      // then hide the current project, set the new project, then expand
      // that new project
      setIsHidden(true)
      setSelectedProject(project)
      setIsHidden(false)
    }

    // if there isn't already a project expanded, or the same project
    // was clicked, then set isHidden to the opposite value
    if (!selectedProject || selectedProject === project) {
      setIsHidden(!isHidden)
    }
  }

  return snapshots.map(snap => {
    // snap.val() == a project from the table
    const { name, role, description, technologies, links } = snap.val()

    return (
      <Project key={name}>
        {error && <strong>Error: {error}</strong>}
        {loading && <Loading />}
        {!loading && snapshots && (
          <>
            <Lines onClick={toggle}>{name.toUpperCase()}</Lines>
            {!isHidden && selectedProject === name.toUpperCase() && (
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
          </>
        )}
      </Project>
    )
  })
}
