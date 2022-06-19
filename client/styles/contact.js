import styled, { css } from 'styled-components'

export const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

const inputAndTextAreaStyles = css`
  font-size: 14pt;
  text-align: center;
  width: 100%;
  padding: 1% 0;
  margin-bottom: 10%;
  background: transparent;
  border: transparent;
  border-bottom: 1.5px solid gray;

  :focus {
    border-bottom: 1.5px solid #e0bf9f;
    transition: all 0.25s ease-in-out;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 50%;
`

export const Asterisk = styled.label`
  :after {
    color: red;
    content: '* ';
  }
`

export const Input = styled.input`
  -webkit-backface-visibility: hidden;
  margin-bottom: 20%;
  ${inputAndTextAreaStyles}
`

export const TextArea = styled.textarea`
  resize: vertical;
  min-height: 65px;
  max-height: 300px;
  ${inputAndTextAreaStyles}
`

export const Disclaimer = styled.p`
  font-size: 5pt;
  font-style: italic;
`
