import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'

import useExpansion from '~/client/hooks/useExpansion'
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
  const [items, setItems] = useState([])
  const { toggle, isExpanded, expandedItem } = useExpansion()

  useEffect(
    () =>
      onSnapshot(collection(db, 'projects'), snapshot =>
        setItems(snapshot.docs.map(doc => doc.data()))
      ),
    []
  )

  return items.map(({ name, role, description, technologies, links }) => (
    <ProjectStyle key={name}>
      <Lines onClick={toggle}>{name.toUpperCase()}</Lines>
      {isExpanded && expandedItem === name.toUpperCase() && (
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
