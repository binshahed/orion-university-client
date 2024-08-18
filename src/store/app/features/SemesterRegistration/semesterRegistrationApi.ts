import { baseApi } from "../../api/baseApi";

const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSemesterRegistration: builder.mutation({
      query: (studentData) => ({
        url: "/semester-registration",
        method: "POST",
        body: studentData
      }),
      invalidatesTags: ["SemesterRegistration"]
    }),
    getAllRegisteredSemesters: builder.query({
      query: () => ({
        url: "/semester-registration",
        method: "GET"
      }),
      providesTags: ["SemesterRegistration"]
    })
  })
});

export const {
  useCreateSemesterRegistrationMutation,
  useGetAllRegisteredSemestersQuery
} = semesterRegistrationApi;
