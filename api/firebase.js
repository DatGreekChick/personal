import { api } from './base'

export const firebaseApi = api.injectEndpoints({
  endpoints: build => ({
    fetchProjects: build.query({
      queryFn: async () => {
        const { fetchData } = await import('../firebase-app')
        return fetchData('projects')
      },
    }),
    fetchArticles: build.query({
      queryFn: async () => {
        const { fetchData } = await import('../firebase-app')
        return fetchData('articles')
      },
    }),
    fetchUses: build.query({
      queryFn: async () => {
        const { fetchData } = await import('../firebase-app')
        return fetchData('uses')
      },
    }),
  }),
})

export const {
  useFetchProjectsQuery,
  useFetchArticlesQuery,
  useFetchUsesQuery,
  usePrefetch,
} = firebaseApi
