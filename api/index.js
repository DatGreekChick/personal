import { collection, getDocs } from 'firebase/firestore'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import { db } from '~/db/firebase'

const fetchData = async path => {
  try {
    const data = []
    const querySnapshot = await getDocs(collection(db, path))
    querySnapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() })
    })

    return { data }
  } catch (error) {
    return { error }
  }
}

export const firebaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    fetchProjects: builder.query({
      async queryFn() {
        return fetchData('projects')
      },
    }),
    fetchArticles: builder.query({
      async queryFn() {
        return fetchData('articles')
      },
    }),
  }),
})

export const { useFetchProjectsQuery, useFetchArticlesQuery } = firebaseApi
