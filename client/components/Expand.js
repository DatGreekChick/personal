import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'

import { ProjectLink } from '~/client/components/Button'
import {
  Project,
  Lines,
  Role,
  Description,
  Detail,
  Tech,
} from '~/client/styles/work'

import db from '~/db/firebase'

export default () => {
  const [isHidden, setIsHidden] = useState(true)
  const [selectedProject, setSelectedProject] = useState('')
  const [projects, setProjects] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, 'projects'), snapshot =>
        setProjects(snapshot.docs.map(doc => doc.data()))
      ),
    []
  )

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

  return projects.map(p => {
    const { name, role, description, technologies, links } = p

    return (
      <Project key={name}>
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
      </Project>
    )
  })
}
