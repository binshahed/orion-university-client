import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
  {
    name: "Faculty",
    path: "faculty",
    element: <FacultyDashboard />
  },
  {
    name: "User Management",
    element: <AdminDashboard />,
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
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />
      }
    ]
  }
];