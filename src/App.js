import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Jobdetails from "./Pages/Jobdetails";
import Job from "./Pages/Job";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";

export default function App() {
  function Layout() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const Router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/jobs", element: <ProtectedRoute><Job /></ProtectedRoute> },
        { path: "/jobdetails/:id", element: <Jobdetails /> },
        { path: "/profile", element: <Profile /> },
      ]
    }
  ])
  return (
    <div className="w-full h-full">
      <RouterProvider router={Router} />
    </div>
  );
}
