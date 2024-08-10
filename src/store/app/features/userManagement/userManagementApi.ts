import { baseApi } from "../../api/baseApi";

const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (studentData) => ({
        url: "/users/create-student",
        method: "POST",
        body: studentData
      }),
      invalidatesTags: ["Student"]
    })
  })
});

export const { useCreateStudentMutation } = studentApi;
