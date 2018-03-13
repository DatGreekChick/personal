import 'jsdom-global/register'
import React from 'react'
import { NavLink } from 'react-router-dom'
import About from '../client/components/About'
import { aboutHeader, aboutText1, aboutText2 } from '../content/about'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import sinon from 'sinon'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('About component', () => {
  beforeEach(() => configure({ adapter: new Adapter() }))

  test('has three paragraph tags', () => {
    const component = shallow(<About/>)
    expect(component.contains(<p className='about-text' />)).to.equal(true)
  })

  test('it should match its empty snapshot', () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('it has three p tags nested in a div tag', () => {
    const component = shallow(<About/>)

    // the component contains three p tags with these classes
    expect(component.find('about-header').exists()).to.equal(true)
    expect(component.find('about-text').exists()).to.equal(true)


    // the entire component consists of this html
    // not sure about the {aboutHeader}, etc. here
    expect(component.html()).to.equal(`<div class="about">
          <p class="about-header">{aboutHeader}</p>
          <p class="about-text">{aboutText1}</p>
          <p class="about-text">{aboutText2}</p>
            <NavLink exact to="work">
              <button>See my work</button>
            </NavLink>
        </div>`)
  })

  test.only('it simulates click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount((<About onButtonClick={onButtonClick}/>))

    wrapper.find('button').simulate('click')
    expect(onButtonClick).to.have.property('callCount', 1)
    expect(wrapper.text()).toEqual('See my work'.toUpperCase())
  })
})