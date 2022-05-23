import styled from 'styled-components'

export const StyledContact = styled.div`
  overflow: hidden;
  padding: 0 5% 3% 5%;
`

export const ContactForm = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const inputAndTextAreaStyles = `
  font-size: 16pt;
  width: calc(100% / 0.5);
  padding: 1% 0;
  background: transparent;
  border: transparent;
  border-bottom: 1.5px solid gray;
  
  @media (min-width: 320px) and (max-width: 480px) {
    width: calc(100% / 0.75);
  }
`

export const Input = styled.input`
  -webkit-backface-visibility: hidden;
  margin-bottom: 20%;
  ${inputAndTextAreaStyles}

  :focus {
    border-bottom: 1.5px solid #e0bf9f;
    transition: all 0.25s ease-in-out;
  }
`

export const TextArea = styled.textarea`
  resize: vertical;
  min-height: 65px;
  max-height: 300px;
  ${inputAndTextAreaStyles}
`

export const H2 = styled.h2`
  font-size: 60pt;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 49pt;
    margin: 5% auto 15% auto;
  }
`

export const Disclaimer = styled.p`
  font-size: 5pt;
  font-style: italic;
`
