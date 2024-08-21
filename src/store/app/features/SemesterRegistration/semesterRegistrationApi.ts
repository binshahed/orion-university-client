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
    }),
    updateSemesterRegistrationStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/semester-registration/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: ["SemesterRegistration"]
    })
  })
});

export const {
  useCreateSemesterRegistrationMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateSemesterRegistrationStatusMutation
} = semesterRegistrationApi;
