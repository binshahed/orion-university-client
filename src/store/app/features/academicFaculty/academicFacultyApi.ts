import { baseApi } from "../../api/baseApi";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicFaculties: builder.query({
      query: () => ({
        url: "/academic-faculty",
        method: "GET"
      }),
      providesTags: ["academicFaculty"]
    }),
    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["academicFaculty"]
    })
  })
});

export const {
  useGetAllAcademicFacultiesQuery,
  useCreateAcademicFacultyMutation
} = academicFacultyApi;
