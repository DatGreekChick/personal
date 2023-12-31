import React from 'react'

import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'

const LoadingStyled = styled.div`
  display: flex;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
`

const Loading = () => (
  <LoadingStyled>
    <InfinitySpin visible color='#e0bf9f' ariaLabel='infinity-spin-loading' />
  </LoadingStyled>
)

export default Loading
