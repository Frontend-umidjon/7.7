import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation
export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ["BLOG", "PRODUCT"]
})
