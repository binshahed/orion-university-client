import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/common/SignIn";
import SignUp from "../pages/common/SignUp";
import { adminRoutes } from "./admin.routes";

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
    children: adminRoutes
  }
]);

export default router;
