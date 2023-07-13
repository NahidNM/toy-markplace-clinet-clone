import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import DetailsToys from "../pages/Details/DetailsToys";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all-toys',
            element: <AllToys></AllToys>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
          path: 'my-toys',
          element: <MyToys></MyToys>,
          loader: ({params})=>fetch("https://toy-marketplace-server-beta-one.vercel.app/alltoys")
      },
      {
        path: '/update/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({params})=> fetch(`https://toy-marketplace-server-beta-one.vercel.app/alltoys/${params.id}`)  
      },
      {
        path: '/add-toys',
        element: <AddToys></AddToys>
    },
    {
       path: '/toydetails/:id',
       element: <PrivateRoute><DetailsToys></DetailsToys></PrivateRoute>,
       loader: ({params}) => fetch(`https://toy-marketplace-server-beta-one.vercel.app/alltoys/${params.id}`)
    },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
      
    },
  ]);

  export default router;