import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { socialLinks } from '~/content/secrets'
import '~/public/assets/styles/footer.css'

export default () =>
  <div className='footer' role='contentinfo'>
    <span className='copyright'>
      &copy; {`${(new Date()).getFullYear()} Eleni Arvanitis`}
    </span>
    <div>
      {
        socialLinks.map(link => <a key={link[0]} className='icons'
                                   href={link[0]} rel='noopener'
                                   target='_blank' tabIndex='0'
                                   role='presentation'>
          <FontAwesomeIcon icon={link[1]}/>
        </a>)
      }
    </div>
  </div>