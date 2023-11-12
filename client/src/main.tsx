import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderComponent } from "./components";
import { MainPage, DetailPage, CartPage } from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <HeaderComponent />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:page",
        element: <MainPage />,
      },
      {
        path: "/current/:id",
        element: <DetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
