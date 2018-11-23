import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { siteKey, link } from '~/content/secrets'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      'g-recaptcha-response': ''
    }
  }

  handleChange = propertyName => evt => {
    this.setState({
      ...this.state,
      [propertyName]: evt.target.value
    })
  }

  verifyHumanity = req => {
    this.setState({ 'g-recaptcha-response': req })
  }

  handleSubmit = () => {
    const { name, email, message } = this.state
    fetch(`${link}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`)
  }

  render() {
    const { name, email, message } = this.state
          , inputs = [
            { type: 'text', name: 'name', value: name, placeholder: 'Bilbo Baggins' },
            { type: 'email', name: 'email', value: email, placeholder: 'burglar@shire.com' },
          ]

    return <form id='gform' onSubmit={this.handleSubmit}>
      {
        inputs.map(input => <label className='form-label' key={input.type}>
          <input className='form-input' type={input.type}
                 name={input.name} required
                 onChange={this.handleChange(input.name.toLowerCase())}
                 placeholder={input.placeholder} value={input.value}/><br/>
        </label>)
      }
      <label className='form-label'>
        <textarea className='form-input' name='message'
                  placeholder="We're looking for a wizard to travel with us to the Lonely Mountain"
                  value={message} onChange={this.handleChange('message')}/><br/>
      </label>
      <ReCAPTCHA ref='recaptcha' sitekey={siteKey} theme='dark'
                 onChange={this.verifyHumanity}/>
      <button type='submit'>Submit</button>
    </form>
  }
}