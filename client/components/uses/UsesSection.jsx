import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'

import { Link } from '~/client/components'
import { scrollToSection } from '~/client/lib/scroll'
import {
  StyledFontAwesomeIcon,
  StyledH3,
  StyledParagraph,
  StyledRouterLink,
} from '~/client/styles'

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
  const [clickedSections, setClickedSections] = useState({})
  const navigate = useNavigate()

  const sectionTitle = section.title.toLowerCase().split(' ').join('-')
  const visibility = clickedSections[sectionTitle]

  const handleCopyToClipboard = (evt, sectionTitle) => {
    evt.preventDefault()

    navigator.clipboard
      .writeText(`${location.href}#${sectionTitle}`)
      .then(() => {
        setClickedSections(prevState => ({
          ...prevState,
          [sectionTitle]: 'visible',
        }))

        navigate(`#${sectionTitle}`)
        scrollToSection(sectionTitle)

        setTimeout(() => {
          setClickedSections(prevState => ({
            ...prevState,
            [sectionTitle]: 'hidden',
          }))
        }, 1000)
      })
  }

  return (
    <section id={sectionTitle}>
      <h2>
        <StyledRouterLink
          to={`#${sectionTitle}`}
          onClick={e => handleCopyToClipboard(e, sectionTitle)}
        >
          {section.title}
          {!visibility ? (
            <StyledFontAwesomeIcon
              icon={faCopy}
              className='copy-icon'
              visibility={visibility}
            />
          ) : (
            <StyledFontAwesomeIcon icon={faCheck} visibility={visibility} />
          )}
        </StyledRouterLink>
      </h2>
      {section.description && (
        <StyledParagraph>{section.description}</StyledParagraph>
      )}
      {renderItems(section.items)}
    </section>
  )
}
