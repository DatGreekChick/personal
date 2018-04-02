import 'jsdom-global/register'
import 'raf/polyfill'

import React from 'react'
import About from '../client/components/About'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import sinon from 'sinon'

import { JSDOM } from 'jsdom'
const { document } = (new JSDOM('<!DOCTYPE html><html><body> </body></html>')).window
global.document = document
global.window = document.defaultView

describe('About component', () => {
  beforeEach(() => configure({ adapter: new Adapter() }))

  test('has three paragraph tags', () => {
    expect(shallow(<About/>).find('.about-header').length).toEqual(1)
    expect(shallow(<About/>).find('.about-text').length).toEqual(2)
  })

  test('it should match its empty snapshot', () => {
    const tree = renderer.create(About).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('it simulates click events', () => {
    const onButtonClick = sinon.spy()
        , wrapper = mount(<button onClick={onButtonClick}/>)

    // TODO: have this simulate a button click within the actual component
    expect(shallow(<About/>).find('button').length).toEqual(1)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).toHaveProperty('callCount', 1)
    // expect(wrapper.text()).toEqual('see my work'.toUpperCase())
  })
})