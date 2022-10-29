import { useCallback, useState } from 'react'

const useExpansion = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedItem, setExpandedItem] = useState('')

  const toggle = useCallback(evt => {
    const item = evt.target.innerText

    if (!expandedItem) {
      setExpandedItem(item)
    } else if (expandedItem && item !== expandedItem) {
      // if there's an expanded item, but a different item was clicked, then
      // hide the current item, set the new item, then expand that new item
      setIsExpanded(false)
      setExpandedItem(item)
      setIsExpanded(true)
    }

    // if there isn't already an expanded item, or the same item was clicked,
    // then set isExpanded to the opposite value
    if (!expandedItem || expandedItem === item) {
      setIsExpanded(!isExpanded)
    }
  }, [])

  return { toggle, isExpanded, expandedItem }
}

export default useExpansion
