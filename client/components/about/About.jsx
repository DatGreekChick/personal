import { NavLink } from 'react-router'

import styles from './About.module.css'
import btnStyles from '../../button.module.css'

export const About = () => (
  <div className={styles.about}>
    <h1 style={{ fontSize: '30pt' }}>Creating useful and engaging software</h1>
    <div style={{ fontSize: '14pt' }}>
      <p>
        Every day I get to ride the insatiable roller coaster that is software
        engineering! I&apos;ve built extensible Python pip packages, streamlined
        aggregation engines in C++, created valuable HTTP REST APIs using Flask
        or Rails, designed beautiful React frontends with millions of monthly
        hits. I&apos;m an engaging speaker, produce minimalist code, design
        simple but powerful systems, write killer documentation, and test
        everything. I absolutely love to learn, get a thrill when teaching
        others, and really dig pair programming.
      </p>
      <p>
        I&apos;m advanced in Python, TypeScript, Ruby/Rails, C++, Webpack, SQL
        and NoSQL databases, Firebase, React, HTML, and CSS. I also have
        experience with AWS (Lambda, S3), Docker, Grafana, and Splunk. I thrive
        in environments that constantly push me to learn and want to learn more
        programming languages, including Swift and Go. For more of my
        experience, check out my work below!
      </p>
      <p>
        When I&apos;m not on the job, I love to venture outdoors either via
        biking, kayaking, or hiking, taking photos while traveling, catching a
        game of soccer, or strumming my bass guitar.
      </p>
    </div>
    <button className={btnStyles.btn}>
      <NavLink to='/work' className={btnStyles.navLink} />
      See my work
    </button>
  </div>
)
