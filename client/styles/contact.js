import { css, styled } from 'styled-components'

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
  margin: 0 auto 10% auto;
  background: transparent;
  border: transparent;
  border-bottom: thin solid gray;

  &:focus {
    border-bottom: thin solid #e0bf9f;
    transition: all 0.25s ease-in-out;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    width: clamp(70%, 90%, 100%);
  }
`

export const Asterisk = styled.span`
  &:after {
    color: red;
    content: '* ';
  }
`

export const Input = styled.input`
  ${inputAndTextAreaStyles}
`

export const TextArea = styled.textarea`
  resize: none;
  max-height: 300px;
  ${inputAndTextAreaStyles}
`

export const Disclaimer = styled.p`
  font-size: 5pt;
  font-style: italic;
`
