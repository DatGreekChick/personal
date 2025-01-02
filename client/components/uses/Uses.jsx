import { useEffect } from 'react'

import { useFetchUsesQuery } from '~/api'

import { Loading, UsesSection } from '~/client/components'
import { scrollToSection } from '~/client/lib/scroll'
import { Header, StyledParagraph, StyledUses } from '~/client/styles'

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
