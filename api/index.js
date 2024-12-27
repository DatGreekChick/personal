import { collection, getDocs } from 'firebase/firestore'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import { db } from '~/firebase-app'

const fetchData = async path => {
  try {
    const querySnapshot = await getDocs(collection(db, path))
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    return { data }
  } catch (error) {
    return { error }
  }
}

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
