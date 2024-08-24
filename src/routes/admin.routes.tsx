import {
  AdminDashboard,
  CreateAdmin,
  CreateFaculty,
  CreateStudent
} from "../pages/admin";
import {
  AcademicDepartment,
  AcademicFaculty,
  AcademicSemester,
  CreateAcademicDepartment,
  CreateAcademicFaculty,
  CreateAcademicSemester
} from "../pages/admin/academicManagement";
import CourseData from "../pages/admin/courseManagement/CourseData";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import RegisteredSemester from "../pages/admin/SemesterRegistration/RegisteredSemester";
import SemesterRegistration from "../pages/admin/SemesterRegistration/SemesterRegistration";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetail from "../pages/admin/userManagement/StudentDetail";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />
      }
    ]
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />
      },
      {
        name: "All Students",
        path: "all-students",
        element: <StudentData />
      },
      {
        path: "student/:id",
        element: <StudentDetail />
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />
      }
    ]
  },
  {
    name: "Semester Registration",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemester />
      }
      // {
      //   name: "All Students",
      //   path: "all-students",
      //   element: <StudentData />
      // },
      // {
      //   path: "student/:id",
      //   element: <StudentDetail />
      // },
      // {
      //   name: "Create Student",
      //   path: "create-student",
      //   element: <CreateStudent />
      // }
    ]
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />
      },
      {
        name: "Course Details",
        path: "course-details",
        element: <CourseData />
      }
    ]
  }
];
