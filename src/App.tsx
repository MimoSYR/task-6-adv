import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Root from "./layout/Root";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewsletterPage from "./pages/NewsletterPage";

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
        path: "post/:id",
        element: <PostPage/>,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />
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
