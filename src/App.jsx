import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Applayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { Contect } from "./pages/Contect";
import { ErrorPage } from "./pages/ErrorPage";
import { Countrydetails } from "./components/Layout/Countrydetails";
const router= createBrowserRouter([
  {
    path:"/",
    element : <Applayout />,
    errorElement :<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"Country",
        element:<Country />
      },
      {
        path:"Country/:id",
        element:<Countrydetails />
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contect",
        element:<Contect/>
      }//maybe do not need koma 
    ]
  }
 
]);

const App=()=>{
  return <RouterProvider router={router}></RouterProvider>
};

export default App;
