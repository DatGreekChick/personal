import { NavLink } from 'react-router'

import styles from './About.module.css'
import btnStyles from '../../button.module.css'

export const About = () => (
  <div className={styles.about}>
    <h1 style={{ fontSize: '30pt' }}>Creating useful and engaging software</h1>
    <div style={{ fontSize: '14pt' }}>
      <p>
        Every day I get to ride the insatiable roller coaster that is software
        engineering, and I&apos;ve been strapped in for the AI wave since day
        one. I&apos;ve built industry-first AI-powered network intelligence
        products, grown and led teams around them, shipped MCP servers at both
        product and company scale, and evangelized AI-first thinking across a
        Fortune 100. Before all that: extensible Python packages, C++
        aggregation engines, REST APIs, React frontends with millions of monthly
        hits. I&apos;m an engaging speaker, produce minimalist code, design
        simple but powerful systems, write killer documentation, test
        everything, and get a genuine thrill when teaching others what&apos;s
        possible.
      </p>
      <p>
        I work across the full stack: Python, TypeScript, Ruby/Rails, C++,
        React, SQL and NoSQL, AWS, Docker, and Splunk; plus AI models from
        Anthropic, OpenAI, and Google, build with fastMCP, and thrive with
        Cursor. For more of my experience, check out my work below!
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
