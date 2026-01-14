import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'

import { Link } from '..'
import { scrollToSection } from '../../lib/scroll'
import {
  StyledFontAwesomeIcon,
  StyledH3,
  StyledParagraph,
  StyledRouterLink,
} from '../../styles'

import { CallToAction } from './CallToAction'

// Call-to-action links for specific sections
const CTA_LINKS = {
  podcasts:
    'https://podcasts.apple.com/us/podcast/299-eleni-konior-senior-staff-software-engineer-at/id1464180320?i=1000743464724',
}

// there's a conflict on Link when this goes in styles/uses.js
const StyledLink = styled(Link)`
  font-weight: bold;

  &:hover {
    color: #e0bf9f;
  }
`

const renderItems = items => {
  const sortedItems = [...items].sort((a, b) => a.title.localeCompare(b.title))

  return sortedItems.map((item, index) => (
    <Fragment key={item.title}>
      {item.items ? (
        <Fragment>
          <StyledH3 style={index === 0 ? { marginTop: 0 } : {}}>
            {item.title}
          </StyledH3>
          {renderItems(item.items)}
        </Fragment>
      ) : (
        <ul style={{ margin: 0 }}>
          <li>
            <StyledLink href={item.link}>{item.title}</StyledLink>
            {item.description && ` - ${item.description}`}
          </li>
        </ul>
      )}
    </Fragment>
  ))
}

export const UsesSection = ({ section }) => {
  const [visibility, setVisibility] = useState('hidden')
  const navigate = useNavigate()

  const sectionTitle = section.title.toLowerCase().split(' ').join('-')
  const hash = `#${sectionTitle}`

  const handleClick = sectionTitle => evt => {
    evt.preventDefault()

    // copy link text to user's clipboard
    navigator.clipboard.writeText(`${location.href}${hash}`).then(() => {
      setVisibility('visible')

      // update the URL in the browser, scroll to section top, reset visibility
      navigate(hash)
      scrollToSection(sectionTitle)
      setTimeout(() => setVisibility('hidden'), 1000)
    })
  }

  return (
    <section id={sectionTitle}>
      <h2>
        <StyledRouterLink to={hash} onClick={handleClick(sectionTitle)}>
          {section.title}
          <StyledFontAwesomeIcon
            icon={visibility === 'visible' ? faCheck : faCopy}
            className='copy-icon'
            visibility={visibility}
          />
        </StyledRouterLink>
      </h2>
      {section.description && (
        <StyledParagraph>{section.description}</StyledParagraph>
      )}
      {section.title.toLowerCase() === 'podcasts' && (
        <CallToAction
          text="Check out my appearance on the 'Code with Jason' podcast!"
          href={CTA_LINKS.podcasts}
          linkText={'Code with Jason'}
        />
      )}
      {renderItems(section.items)}
    </section>
  )
}
