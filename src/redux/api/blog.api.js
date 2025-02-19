import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (params) => ({
        url:'/blogs',
        method:"GET",
        params
      }),
      providesTags: ["BLOG"]
    }),
    getSingleBlog: build.query({
      query: (id)=> ({
        url: `/blogs/${id}`,
        method:"GET"
      }),
      providesTags: ["BLOG"]
    }),
    createBlog: build.mutation({
      query: (body)=> ({
        url:"/blogs",
        method: "POST",
        body
      }),
      invalidatesTags: ["BLOG"]
    }),
    deleteBlog: build.mutation({
      query: (id)=> ({
        url: `/blogs/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["BLOG"]
    }),
    updateBlog: build.mutation({
      query: ({id, body})=> ({
        url: `/blogs/${id}`,
        method:"PUT",
        body
      }),
      invalidatesTags: ["BLOG"]
    })
  }),
  overrideExisting: false,
})

export const { useGetBlogsQuery, useCreateBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation, useGetSingleBlogQuery } = extendedApi