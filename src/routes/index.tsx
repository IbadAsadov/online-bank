import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Accounts from "../pages/app/Accounts";
import CreateAccount from "../pages/app/CreateAccount";
import Error from "../pages/Error";
import RootPage from "../pages/app/Root";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Accounts />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
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
