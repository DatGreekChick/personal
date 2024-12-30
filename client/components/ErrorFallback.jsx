import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { styled } from 'styled-components'

import {
  useCreateGitHubIssueMutation,
  useFetchGitHubIssuesQuery,
  useUpdateGitHubIssueMutation,
} from '~/api'

import { CenterStyledButton } from '~/client/styles/button'

const StyledError = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const location = useLocation()
  const navigated = useRef(false)

  const { data: issues, isLoading, isError } = useFetchGitHubIssuesQuery()
  const [createGitHubIssue] = useCreateGitHubIssueMutation()
  const [updateGitHubIssue] = useUpdateGitHubIssueMutation()

  useEffect(() => {
    if (isLoading || isError) return

    const formattedStack = `### Error occurred at \`${location.pathname}\` on: ${new Date()}\n\`\`\`console\n${error.stack}\n\`\`\``

    // search for any existing GitHub issues with the error.message title
    // if issues exist, update all of them, otherwise create a new issue
    const foundIssues = issues?.filter(issue => issue.title === error.message)
    if (foundIssues?.length > 0) {
      foundIssues.forEach(issue =>
        updateGitHubIssue({
          id: issue.number,
          patch: { body: `${issue.body}\n${formattedStack}` },
        })
      )
    } else {
      createGitHubIssue({
        title: error.message,
        body: formattedStack,
        labels: ['bug'],
      })
    }
  }, [
    error,
    issues,
    location.pathname,
    isLoading,
    isError,
    createGitHubIssue,
    updateGitHubIssue,
  ])

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
