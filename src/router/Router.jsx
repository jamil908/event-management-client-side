import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Main from "../PageLayout/Main";
import Login from "../page/login/Login";
import Register from "../page/login/Register";
import CreateEvent from "../page/createEvent/CreateEvent";
import PrivateRoute from "../page/privateRoute/PrivateRoute";
import Error from "../page/error/Error";



export const router = createBrowserRouter([
    {path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/createEvent',
                element:<PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
            },
        ]
    
    }
])