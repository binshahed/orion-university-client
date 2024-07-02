import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoutes = {
  path: string;
  element: React.ReactElement;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />
  },
  {
    name: "User Management",
    element: <AdminDashboard />,
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />
      }
    ]
  }
];

export const adminRoutes = adminPaths.reduce((acc: TRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }

  if (item?.children) {
    item?.children.forEach((child) => {
      acc.push({
        path: `${child.path}`,
        element: child.element
      });
    });
  }
  return acc;
}, []);

export const sideBarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.path,
      label: <NavLink to={item.path}>{item.name}</NavLink>
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.path,
        label: <NavLink to={child.path}>{child.name}</NavLink>
      }))
    });
  }

  return acc;
}, []);
