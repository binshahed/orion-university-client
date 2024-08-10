import { z } from "zod";

export const createStudentSchema = z.object({
  name: z.object({
    firstName: z.string({ required_error: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string({ required_error: "Last name is required" })
  }),

  dateOfBirth: z
    .any({ required_error: "Date of Birth is required" })
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format"
    }),

  gender: z.string({ required_error: "Gender is required" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is invalid" }),

  contactNo: z
    .string({ required_error: "Contact number is required" })
    .min(10, "Contact number must be at least 10 characters long"),
  emergencyContact: z.string({ message: "Emergency contact is required" }),

  emergencyContactNo: z
    .string({ required_error: "Emergency contact number is required" })
    .min(10, "Emergency contact number must be at least 10 characters long"),

  presentAddress: z.string({ required_error: "Present address is required" }),
  permanentAddress: z.string({
    required_error: "Permanent address is required"
  }),

  guardian: z.object({
    fatherName: z.string({ required_error: "Father's name is required" }),
    fatherOccupation: z.string({
      required_error: "Father's occupation is required"
    }),
    fatherContactNo: z
      .string({ required_error: "Father's contact number is required" })
      .min(10, "Father's contact number must be at least 10 characters long"),

    motherName: z.string({ required_error: "Mother's name is required" }),
    motherOccupation: z.string({
      required_error: "Mother's occupation is required"
    }),
    motherContactNo: z
      .string({ required_error: "Mother's contact number is required" })
      .min(10, "Mother's contact number must be at least 10 characters long")
  }),

  localGuardian: z.object({
    name: z.string({ required_error: "Local guardian's name is required" }),
    occupation: z.string({
      required_error: "Local guardian's occupation is required"
    }),
    contactNo: z
      .string({
        required_error: "Local guardian's contact number is required"
      })
      .min(
        10,
        "Local guardian's contact number must be at least 10 characters long"
      ),
    address: z.string({
      required_error: "Local guardian's address is required"
    })
  }),

  academicDepartment: z.string({
    required_error: "Academic department is required"
  }),

  admissionSemester: z.string({
    required_error: "Admission semester is required"
  }),
  profileImage: z.any().optional()
});
