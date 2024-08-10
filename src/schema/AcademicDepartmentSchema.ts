import { z } from "zod";

export const createAcademicDepartmentSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  academicFaculty: z.string({ required_error: "Academic Faculty is required" })
});
