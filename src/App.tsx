import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Root from "./layout/Root";
import BlogPage from "./pages/BlogPage";
import Newsletter from "./pages/Newsletter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog/:id",
        element: <BlogPage />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
