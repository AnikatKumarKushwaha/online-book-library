import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import BooksPage from "./Screens/BooksPage";
import BooksDetailPage from "./Screens/BooksDetailPage";
import AddBookPage from "./Screens/AddBookPage";
import ErrorPage from "./Screens/ErrorPage";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "./utils/store";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books/:category",
          element: <BooksPage />,
        },
        {
          path: "/:category/:id",
          element: <BooksDetailPage />,
        },
        {
          path: "/add-books",
          element: <AddBookPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
