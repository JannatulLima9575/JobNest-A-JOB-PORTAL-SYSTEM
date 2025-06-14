import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplications from "./../Pages/Application/MyApplications";
import PageNotFound from "../Pages/PageNotFound";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPost/MyPostedJobs";
import ViewApplications from "../Pages/Application/ViewApplications";
import ShowDetails from "../Pages/ShowDetailsPage/ShowDetails";

const Router = createBrowserRouter([
  // Main layout with navbar & footer
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <ShowDetails />,
        loader: ({ params }) =>
          fetch(`https://job-nest-server-nu.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: 
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
      },
      {
        path: "myApplications",
        element: 
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>

      },
      {
        path: "addJob",
        element: 
          <PrivateRoute>
            <AddJob/>
          </PrivateRoute>

      },
      {
        path: "myPostedJobs",
        element: 
          <PrivateRoute>
            <MyPostedJobs/>
          </PrivateRoute>
      },
      {
        path: "applications/:job_id",
        element: 
          <PrivateRoute>
            <ViewApplications/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://job-nest-server-nu.vercel.app/applications/job/${params.job_id}`)
      },
    ],
  },

  // Routes without Navbar/Footer
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
    element: <PageNotFound />,
  },
]);

export default Router;