import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Auth from "../components/Auth";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/shared/Error/Error";
import AddItems from "../pages/addItems/AddItems";
import AllItems from "../pages/allItems/AllItems";
import Details from "../pages/detailsPage/Details";
import RecoveredItems from "../pages/recoveredItems/RecoveredItems";
import MyItems from "../pages/myItems/MyItems";
import Update from "../components/Update";
import Rahim from "../components/story/Rahim";
import Amina from "../components/story/Amina";
import Children from "../components/story/Children";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://where-is-it-server.vercel.app/items"),
      },
      {
        path: "/items",
        element: <AllItems />,
        loader: () => fetch("https://where-is-it-server.vercel.app/items"),
      },
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://where-is-it-server.vercel.app/items/${params.id}`),
      },
      {
        path: "/addItems",
        element: (
          <PrivateRoute>
            <AddItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/recovered",
        element: (
          <PrivateRoute>
            <RecoveredItems />
          </PrivateRoute>
        ),
        loader: () => fetch("https://where-is-it-server.vercel.app/recovered"),
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
        loader: () => fetch("https://where-is-it-server.vercel.app/items"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://where-is-it-server.vercel.app/items/${params.id}`),
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/wallet-story",
        element: <Rahim />,
      },
      {
        path: "/necklace-story",
        element: <Amina />,
      },
      {
        path: "/pet-story",
        element: <Children />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
