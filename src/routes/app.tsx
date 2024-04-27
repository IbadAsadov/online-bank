import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Accounts from "../pages/app/Accounts";
import CreateAccount from "../pages/app/CreateAccount";
import Error from "../pages/Error";
import RootPage from "../pages/app/Root";
import ProtectedRoute from "../components/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Accounts /></ProtectedRoute>,
      },
      {
        path: "/create-account",
        element: <ProtectedRoute><CreateAccount /></ProtectedRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: < Error status={404} title="404" subTitle="Sorry, the page you visited does not exist." />,
  },
];

const router = createBrowserRouter(routes);

export { router };
