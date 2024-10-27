import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
    path:'/',
    element: <App />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/about',
            element:<div> About</div>
        },
        {
            path:'/orders',
            element:<div> Orders</div>
        },
        {
            path:'/contact',
            element:<div> Contact</div>
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/cart',
            element:<CartPage />
        },
        {
            path:'/checkout',
            element:<PrivateRoute><CheckOutPage /></PrivateRoute>
        },
        {
            path:'/books/:id',
            element:<SingleBook />
        },

    ]
    }
])
export default router;