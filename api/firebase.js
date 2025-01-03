import { api } from '~/api/base'
import { fetchData } from '~/firebase-app'

export const firebaseApi = api.injectEndpoints({
  endpoints: build => ({
    fetchProjects: build.query({
      queryFn: () => fetchData('projects'),
    }),
    fetchArticles: build.query({
      queryFn: () => fetchData('articles'),
    }),
    fetchUses: build.query({
      queryFn: () => fetchData('uses'),
    }),
  }),
})

export const {
  useFetchProjectsQuery,
  useFetchArticlesQuery,
  useFetchUsesQuery,
} = firebaseApi
