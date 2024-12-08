import { InfinitySpin } from 'react-loader-spinner'
import { styled } from 'styled-components'

const StyledLoading = styled.div`
  display: flex;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
`

export const Loading = () => (
  <StyledLoading>
    <InfinitySpin visible color='#e0bf9f' ariaLabel='infinity-spin-loading' />
  </StyledLoading>
)
