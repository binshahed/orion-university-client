import { baseApi } from "../../api/baseApi";

const academicDepartment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicDepartments: builder.query({
      query: () => ({
        url: "/academic-department",
        method: "GET"
      }),
      providesTags: ["AcademicDepartment"]
    }),
    createAcademicDepartment: builder.mutation({
      query: (academicDepartment) => ({
        url: "/academic-department",
        method: "POST",
        body: academicDepartment
      }),
      invalidatesTags: ["AcademicDepartment"]
    })
  })
});

export const {
  useGetAllAcademicDepartmentsQuery,
  useCreateAcademicDepartmentMutation
} = academicDepartment;
