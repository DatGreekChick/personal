import { api } from './base'

const lazyFetch = async path => {
  const { fetchData } = await import('../firebase-app')
  return fetchData(path)
}

export const firebaseApi = api.injectEndpoints({
  endpoints: build => ({
    fetchProjects: build.query({ queryFn: () => lazyFetch('projects') }),
    fetchArticles: build.query({ queryFn: () => lazyFetch('articles') }),
    fetchUses: build.query({ queryFn: () => lazyFetch('uses') }),
  }),
})

export const {
  useFetchProjectsQuery,
  useFetchArticlesQuery,
  useFetchUsesQuery,
  usePrefetch,
} = firebaseApi
