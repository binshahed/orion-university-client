import { z } from "zod";

export const createAcademicFacultySchema = z.object({
  name: z.string({ required_error: "Name is required" })
});
