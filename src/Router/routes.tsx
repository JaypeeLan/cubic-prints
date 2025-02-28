import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import Blog from "../pages/Blog";
import BlogArticle from "../pages/BlogArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogArticle />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
