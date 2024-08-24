import { baseApi } from "../../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCorse: builder.mutation({
      query: (studentData) => ({
        url: "/course",
        method: "POST",
        body: studentData
      }),
      invalidatesTags: ["course"]
    }),
    getAllCourse: builder.query({
      query: () => ({
        url: "/course",
        method: "GET"
      })
    }),
    getAllFaculty: builder.query({
      query: () => ({
        url: "/faculties",
        method: "GET"
      })
    })
  })
});

export const {
  useCreateCorseMutation,
  useGetAllCourseQuery,
  useGetAllFacultyQuery
} = courseApi;
