import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/dashboard/Dashboard";
import AddCollege from "./pages/AddCollege/AddCollege";
import ZonalHead from "./pages/AddCollege/ZonalHead";

export default function Router() {
  const routes = useRoutes([
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "/suchi",
      element: <HomeLayout />,
      children: [
        { element: <Navigate to="/suchi/home" />, index: true },
        { path: "home", element: <Dashboard /> },
        {path:"/suchi/document/AddCollege/ZonalHead",element:<ZonalHead/>},
        { path: "/suchi/document/upload", element: <AddCollege/> },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
   
    // {
    //   path: "*",
    //   element: <Page404 />,
    // },
  ]);

  return routes;
}
