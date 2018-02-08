import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { siteKey, secretKey } from '~/content/secrets'
const request = require('request')

export default class Form extends Component {
  state = { contact: {} }

  handleChange = propertyName => evt => {
    const { contact } = this.state
          , newContact = {
            ...contact,
            [propertyName]: evt.target.value
          }

    console.log(`${propertyName}: ${newContact[propertyName]}`)
    this.setState({ contact: newContact });
  }

  reCAPTCHAChange = (secret, res) => {
    console.log(`reCAPTCHA val: ${res}`)

    request({
      uri: 'https://www.google.com/recaptcha/api/siteverify',
      method: 'POST',
      form: {
        secret: secretKey,
        response: req.body['g-recaptcha-response']
      }
    },
    (err, res, body) => {
      if (err) console.error(err)
      else console.log(`request body: ${body}`)
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    // const { name, email, msg } = this.state.contact
  }

  render() {
    const inputs = [
      { type: 'text', name: 'Name', value: this.state.name },
      { type: 'email', name: 'Email', value: this.state.email }
    ]

    return <div className='contact-form'>
      <form onSubmit={this.handleSubmit}>
        {
          inputs.map(input => <label className='form-label' key={input.type}>
            <input className='form-input' type={`${input.type}`}
                   name={`${input.name}`} required
                   onChange={this.handleChange(input.name.toLowerCase())}
                   placeholder={input.name} value={input.value}/><br/>
          </label>)
        }
        <label className='form-label'>
          <textarea className='form-input' name='message'
                    placeholder='Message' value={this.state.msg}
                    onChange={this.handleChange('message')}/><br/>
        </label>
        <ReCAPTCHA ref='recaptcha' sitekey={siteKey} theme='dark'
                   onChange={this.reCAPTCHAChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  }
}