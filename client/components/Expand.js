import React, { useState } from 'react'
import { useList } from 'react-firebase-hooks/database'

import '~/public/assets/styles/expand.css'
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
    const project = snap.val()

    return (
      <div key={project.name} className='project'>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        {!loading && snapshots && (
          <>
            <span className='line' onClick={toggle}>
              {project.name.toUpperCase()}
            </span>
            {!isHidden && selectedProject === project.name.toUpperCase() ? (
              <div className='detail'>
                <p className='role'>{project.role}</p>
                <p className='description'>{project.description}</p>
                <br />
                <br />
                {project.technologies.map(technology => {
                  return (
                    <div className='tech' key={technology}>
                      {technology.toUpperCase()}
                    </div>
                  )
                })}
                <br />
                <br />
                {project.links.map((link, i) => {
                  return (
                    <a
                      key={`${project.name}-link${i}`}
                      href={
                        link['code']
                          ? link['code']
                          : link['youtube']
                          ? link['youtube']
                          : link['demo']
                      }
                      target='_blank'
                      rel='noopener'
                    >
                      <button className='project-links'>
                        {link['code']
                          ? 'code'
                          : link['youtube']
                          ? 'youtube'
                          : 'demo'}
                      </button>
                    </a>
                  )
                })}
              </div>
            ) : null}
          </>
        )}
      </div>
    )
  })
}
