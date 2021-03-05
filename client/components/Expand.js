import React, { useState } from 'react'
import '~/public/assets/styles/expand.css'
import db from '~/content/fire'

export default () => {
  const [isHidden, setIsHidden] = useState(true)
  const [selectedProject, setSelectedProject] = useState('')
  const [projects, setProjects] = useState([])

  db.ref('work').once('value', snap => {
    snap.val().forEach(s => setProjects(...projects, s))
  })

  const toggle = evt => {
    setIsHidden(false)
    setSelectedProject(evt.target.innerText)
  }

  return projects.map(project => {
    return (
      <div key={project.name} className='project'>
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
      </div>
    )
  })
}
