import { firebaseApi } from '~/api/firebase'
import { gitHubApi } from '~/api/github'

export * from '~/api/base'

export const { useFetchProjectsQuery, useFetchArticlesQuery } = firebaseApi

export const {
  useFetchGitHubIssuesQuery,
  useUpdateGitHubIssueMutation,
  useCreateGitHubIssueMutation,
} = gitHubApi
