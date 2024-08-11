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
    }),
    getAllStudent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }

        return { url: "/students", method: "GET", params: params };
      },
      providesTags: ["Student"]
    }),
    getStudentDetails: builder.query({
      query: (studentId) => ({
        url: `/students/${studentId}`,
        method: "GET"
      }),
      providesTags: ["Student"]
    })
  })
});

export const {
  useCreateStudentMutation,
  useGetAllStudentQuery,
  useGetStudentDetailsQuery
} = studentApi;
