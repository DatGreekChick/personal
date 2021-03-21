import React, { useState } from 'react'
import { useList } from 'react-firebase-hooks/database'

import { ProjectLink } from '~/client/components/Button'
import { Project, Lines, Role, Description, Detail, Tech } from '~/client/styles/work'

import db from '~/content/fire'

export default () => {
  const [isHidden, setIsHidden] = useState(true)
  const [selectedProject, setSelectedProject] = useState('')
  const [snapshots, loading, error] = useList(db.ref('work'))

  const toggle = evt => {
    setIsHidden(!isHidden)
    setSelectedProject(evt.target.innerText)
  }

  return snapshots.map(snap => {
    // snap.val() == a project from the table
    const { name, role, description, technologies, links } = snap.val()

    return (
      <Project key={name}>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        {!loading && snapshots && (
          <>
            <Lines onClick={toggle}>{name.toUpperCase()}</Lines>
            {!isHidden && selectedProject === name.toUpperCase() ? (
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
            ) : null}
          </>
        )}
      </Project>
    )
  })
}
