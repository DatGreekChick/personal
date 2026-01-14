import { styled } from 'styled-components'

const Text = styled.p`
  color: ghostwhite;
  font-style: italic;
  font-size: 15px;
  line-height: 1;
`

const CallToActionAnchor = styled.a`
  color: #e0bf9f;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  padding-bottom: 10px;

  &:focus {
    outline: none;
  }
`

export const CallToAction = ({ text = '', href, linkText }) => {
  if (!href || !text) return null

  // If a linkText is provided and exists inside the text, wrap only that
  const index = linkText ? text.indexOf(linkText) : -1

  if (linkText && index !== -1) {
    const before = text.slice(0, index)
    const after = text.slice(index + linkText.length)

    return (
      <Text>
        {before}
        <CallToActionAnchor
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={linkText}
        >
          {linkText}
        </CallToActionAnchor>
        {after}
      </Text>
    )
  }

  // Fallback: if linkText not found, make the whole sentence the link
  return (
    <CallToActionAnchor
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={text}
    >
      {text}
    </CallToActionAnchor>
  )
}
