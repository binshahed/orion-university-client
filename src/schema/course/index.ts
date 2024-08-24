import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string(),
  code: z.string(),
  prefix: z.string(),
  credits: z.string(),
  prerequisiteCourses: z.string().array()
});
