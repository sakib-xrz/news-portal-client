import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Login from "../components/Login&Register/Login";
import Register from "../components/Login&Register/Register";
import Category from "../components/main-content/Category";
import Home from "../components/main-content/Home";
import News from "../components/main-content/News";
import Policy from "../components/Others/Policy";
import Terms from "../components/Others/Terms";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://news-portal-server-psi.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("https://news-portal-server-psi.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://news-portal-server-psi.vercel.app/category/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://news-portal-server-psi.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
    ],
  },
]);
