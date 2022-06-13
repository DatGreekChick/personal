import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '~/client/components/Button'
import { StyledAbout, AboutText } from '~/client/styles/about'
import { Header } from '~/client/styles'

const About = () => (
  <StyledAbout>
    <Header fontSize='30'>Creating useful and engaging software</Header>
    <AboutText>
      <p>
        Every day I get to ride the insatiable roller coaster that is software
        engineering! I&apos;ve built extensible Python pip packages, streamlined
        aggregation engines in C++, created valuable HTTP REST APIs using Flask,
        designed beautiful React frontends tracking diversity initiatives.
        I&apos;m an engaging speaker, produce minimalist code, write killer
        documentation, and test everything. I absolutely love to learn, get a
        thrill when teaching others, and really dig pair programming.
      </p>
      <p>
        I&apos;m advanced in Python, JavaScript/TypeScript, Node, C++, Webpack,
        SQL and NoSQL databases, Firebase, React, HTML, and CSS. I also have
        some experience with AWS (Lambda), Java, Rust, and robotics hardware
        from independent projects. I thrive in environments that constantly push
        me to learn and want to learn more programming languages, including
        Swift and Go. For more of my experience, check out my work below!
      </p>
      <p>
        When I&apos;m not on the job, I love to venture outdoors either via
        biking, kayaking, or hiking, taking photos while traveling, catching a
        game of soccer, or strumming my bass guitar.
      </p>
    </AboutText>
    <NavLink to='/work'>
      <Button text='See my work' />
    </NavLink>
  </StyledAbout>
)

export default About
