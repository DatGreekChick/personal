import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { styled } from 'styled-components'

import { CenterStyledButton } from '~/client/styles/button'

const StyledError = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const location = useLocation()
  const navigated = useRef(false)

  useEffect(() => {
    navigated.current ? resetErrorBoundary() : (navigated.current = true)
  }, [location, resetErrorBoundary])

  return (
    <StyledError>
      <h2>Uh oh! Something went wrong 🫠</h2>
      <pre style={{ color: 'red' }}>Error: {error.message}</pre>
      <p>Please click the button to try again or navigate to another route.</p>
      <CenterStyledButton onClick={resetErrorBoundary}>
        Try again
      </CenterStyledButton>
    </StyledError>
  )
}
