import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/common/SignIn";
import SignUp from "../pages/common/SignUp";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths)
  }
  // {
  //   path: "/student",
  //   element: <App />,
  //   children: routeGenerator(adminPaths)
  // }
]);

export default router;
