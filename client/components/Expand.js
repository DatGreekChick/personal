import React, { Component } from 'react'
import '~/public/assets/styles/expand.css'
import db from '~/content/fire'

export default class Expand extends Component {
  state = { projects: [], isHidden: true, selectedProject: '' }

  componentWillMount() {
    db.ref('work')
      .once('value', snap => {
        for (let i = 0; i < snap.val().length; i++) {
          this.setState({
            projects: [...this.state.projects, snap.val()[i]]
          })
        }
      })
  }

  toggle = evt => this.setState({
    isHidden: !this.state.isHidden,
    selectedProject: evt.target.innerText
  })

  render() {
    const { projects, isHidden, selectedProject } = this.state

    return projects.map(project => {
      return <div key={project.name} className='project'>
        <span className='line' onClick={this.toggle}>
            {project.name.toUpperCase()}
        </span>
        { !isHidden && selectedProject === project.name.toUpperCase()
          ? <div className='detail'>
            <p className='role'>{project.role}</p>
            <p className='description'>{project.description}</p>
            <br/><br/>
            {
              project.technologies.map(technology => {
                return <div className='tech' key={technology}>
                  {technology.toUpperCase()}
                </div>
              })
            }
            <br/><br/>
            {
              project.links.map((link, i) => {
                return <a key={`${project.name}-link${i}`}
                          href={
                            link['code']
                              ? link['code']
                              : link['youtube']
                                ? link['youtube'] : link['demo']
                          } target='_blank' rel='noopener'>
                  <button className='project-links'>
                    {
                      link['code']
                        ? 'code'
                        : link['youtube']
                          ? 'youtube' : 'demo'
                    }
                  </button>
                </a>
              })
            }
          </div>
          : null
        }
      </div>
    })
  }
}