import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../pages/Home/Home";

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
        }
    ]
    }
])
export default router;