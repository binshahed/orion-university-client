import { TCreateAcademicSemester } from "../../../../types/academicSemester.type";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET"
      }),
      providesTags: ["AcademicSemester"]
    }),
    createAcademicSemesterSemester: builder.mutation({
      query: (academicSemester: TCreateAcademicSemester) => ({
        url: "/academic-semester",
        method: "POST",
        body: academicSemester
      }),
      invalidatesTags: ["AcademicSemester"]
    })
  })
});

export const {
  useGetAllAcademicSemesterQuery,
  useCreateAcademicSemesterSemesterMutation
} = academicSemesterApi;
