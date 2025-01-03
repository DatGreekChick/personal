import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { styled } from 'styled-components'

export const StyledUses = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  width: 80%;
  align-content: center;
  padding-bottom: 1%;
`

export const StyledH3 = styled.h3`
  list-style-type: none;
  font-style: italic;
`

export const StyledRouterLink = styled(Link)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #e0bf9f;
  padding-right: 10px;

  &:hover .copy-icon {
    opacity: 1;
    visibility: visible;
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props =>
    props.visibility === 'visible' ? '#ace1af' : 'ghostwhite'};
  margin-left: 8px;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0;
  visibility: ${props => props.visiblity};
  transition:
    opacity 1s ease,
    visibility 1s ease;

  &:hover {
    opacity: 0.5;
  }
`

export const StyledParagraph = styled.p`
  margin-top: 0;
  font-style: italic;
`
