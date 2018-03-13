import React from 'react'
import renderer from 'react-test-renderer'
import About from '~/client/components/About'

test('About page renders', () => {
  const component = renderer.create(
    <About/>,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  expect(tree)
})