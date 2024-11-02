import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div> About</div>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <div> Contact</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
  path:'/admin',
  element:<div>Admin Login</div>
  },
  {
    path: "/dashboard",
    element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><div>Admin Dashboardd</div></AdminRoute>,
        
      },
      {
        path: "add-new-book",
        element: <AdminRoute><div>Add new book</div></AdminRoute>,
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><div>Edit book</div></AdminRoute>,
      },
      {
        path: "manage-books",
        element:<AdminRoute><div>Manage books</div></AdminRoute>,
      }
    ],
  },
]);
export default router;
