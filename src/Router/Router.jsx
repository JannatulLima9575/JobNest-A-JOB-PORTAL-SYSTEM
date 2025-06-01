import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import ShowDetails from "../Pages/ShowDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../Pages/JobApply";


const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: '/jobs/:id',
          Component: ShowDetails,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute>
            <JobApply/>
          </PrivateRoute>,
        },
        {
          path: "/login",
          Component: Login,
        },
        {
          path: "/register",
          Component: Register,
        },
    ]
  },
]);

export default Router;
