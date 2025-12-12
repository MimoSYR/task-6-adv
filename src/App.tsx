import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Root from "./layout/Root";
import BlogPage from "./pages/BlogPage";
import Newsletter from "./pages/Newsletter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

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
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
