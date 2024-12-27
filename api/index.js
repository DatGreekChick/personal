import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import { fetchData } from '~/firebase-app'

export const firebaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: build => ({
    fetchProjects: build.query({
      queryFn: async () => fetchData('projects'),
    }),
    fetchArticles: build.query({
      queryFn: async () => fetchData('articles'),
    }),
  }),
})

export const { useFetchProjectsQuery, useFetchArticlesQuery } = firebaseApi
