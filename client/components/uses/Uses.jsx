import { useEffect } from 'react'

import { useFetchUsesQuery } from '../../../api'

import { Loading } from '..'
import { scrollToSection } from '../../lib/scroll'
import { Header, StyledParagraph, StyledUses } from '../../styles'

import { UsesSection } from './UsesSection'

export const Uses = () => {
  const { data: sections } = useFetchUsesQuery()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => scrollToSection(hash), 1000)
    }
  }, [])

  return (
    <StyledUses>
      <Header fontSize='35'>What I Use</Header>
      <StyledParagraph>
        Most of the listed items are items I also use at work but some reflect
        my personal use.
      </StyledParagraph>
      {!sections && <Loading />}
      {sections &&
        sections.map(section => (
          <UsesSection key={section.title} section={section} />
        ))}
    </StyledUses>
  )
}
