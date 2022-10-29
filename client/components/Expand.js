import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'

import { ProjectLink } from '~/client/components/Button'
import {
  ProjectStyle,
  Lines,
  Role,
  Description,
  Detail,
  Tech,
} from '~/client/styles/work'

import db from '~/db/firebase'

const Expand = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')
  const [items, setItems] = useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, 'projects'), snapshot =>
        setItems(snapshot.docs.map(doc => doc.data()))
      ),
    []
  )

  const toggle = evt => {
    const item = evt.target.innerText

    if (!selectedItem) {
      setSelectedItem(item)
    } else if (selectedItem && item !== selectedItem) {
      // if there's an expanded item, but a different item was clicked, then
      // hide the current item, set the new item, then expand that new item
      setIsExpanded(false)
      setSelectedItem(item)
      setIsExpanded(true)
    }

    // if there isn't already an expanded item, or the same item was clicked,
    // then set isExpanded to the opposite value
    if (!selectedItem || selectedItem === item) {
      setIsExpanded(!isExpanded)
    }
  }

  return items.map(({ name, role, description, technologies, links }) => (
    <ProjectStyle key={name}>
      <Lines onClick={toggle}>{name.toUpperCase()}</Lines>
      {isExpanded && selectedItem === name.toUpperCase() && (
        <Detail>
          <Role>{role}</Role>
          <Description>{description}</Description>
          <br />
          {technologies.map(technology => (
            <Tech key={technology}>{technology.toUpperCase()}</Tech>
          ))}
          <br />
          {links.map((link, i) => (
            <ProjectLink key={`${name}-${link}${i}`} link={link} />
          ))}
        </Detail>
      )}
    </ProjectStyle>
  ))
}

export default Expand
