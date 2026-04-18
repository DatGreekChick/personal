import { useEffect, useState } from 'react'

import { NavLink } from 'react-router'

import styles from './Home.module.css'
import btnStyles from '../../button.module.css'

const ME = [
  'a software engineer 👩🏻‍💻',
  'Greek 🇬🇷',
  'an economist 📈',
  'inquisitive 🤔',
  'a gamer 🎮',
  'innovative 💥',
  'a Ravenclaw 🦅',
  'adventurous 🌍',
  'a bassist 🎸',
  'fierce 🔥',
  'a pioneer 🚀',
  'imaginative ⚡️',
  'a STEMinist 👩🏻‍🔬',
]

export const Home = () => {
  const [current, setCurrent] = useState({ text: ME[0], key: 0 })
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIdx = Math.floor(Math.random() * ME.length)
      setCurrent(c => {
        setPrev(c)
        return { text: ME[nextIdx], key: Date.now() }
      })
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={styles.me}>
      <span>
        I am{' '}
        <span className={styles.carouselWrapper}>
          <span key={current.key} className={styles.entering}>
            {current.text}
          </span>
          {prev && (
            <span
              key={prev.key}
              className={styles.leaving}
              onAnimationEnd={() => setPrev(null)}
            >
              {prev.text}
            </span>
          )}
        </span>
      </span>
      <p className={styles.description}>
        After graduating from NYU with a B.A. in Economics, I decided to tap
        into my creative side and follow in my parents&apos; entrepreneurial
        footsteps by launching a graphic design company. I learned so much
        during that time, but everything I created was static. Craving to expand
        my technical capabilities coupled with a desire to build dynamic apps
        and a love for languages, I became a software engineer.
        <p>
          Presently, I&apos;m working as a Senior Staff Software Engineer
          focused on building elegant and intelligent customer experiences,
          leading cross-company collaboration, and driving performance
          improvements at Cisco Systems!
        </p>
      </p>
      <button className={btnStyles.btn}>
        <NavLink to='/contact' className={btnStyles.navLink} />
        Say hi
      </button>
    </div>
  )
}
