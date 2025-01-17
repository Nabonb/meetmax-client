import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Main from "../Layouts/Main";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
    ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    },
  ]);