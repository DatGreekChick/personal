import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import styles from './ErrorFallback.module.css'
import btnStyles from '../../button.module.css'
import {
  useCreateGitHubIssueMutation,
  useFetchGitHubIssuesQuery,
  useUpdateGitHubIssueMutation,
} from '../../../api'

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const skip = process.env.NODE_ENV === 'development'

  const location = useLocation()
  const navigated = useRef(false)

  const { data, isLoading, isError } = useFetchGitHubIssuesQuery(undefined, {
    skip,
  })
  const [createGitHubIssue] = useCreateGitHubIssueMutation()
  const [updateGitHubIssue] = useUpdateGitHubIssueMutation()

  useEffect(() => {
    if (skip || isLoading || isError) return

    const formattedStack = `### Error occurred at \`${location.pathname}\` on: ${new Date()}\n\`\`\`console\n${error.stack}\n\`\`\``

    const foundIssues = data?.filter(issue => issue.title === error.message)
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
    data,
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
    <div className={styles.error}>
      <h2>Uh oh! Something went wrong 🫠</h2>
      <pre style={{ color: 'red' }}>Error: {error.message}</pre>
      <p>Please click the button to try again or navigate to another route.</p>
      <button className={btnStyles.btnCenter} onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}
