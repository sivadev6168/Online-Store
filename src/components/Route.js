import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from './Loading';

const Index = lazy(()=>import("./Main"));
const Shop = lazy(()=>import("./Shop"));
const MensClothing = lazy(()=>import("./MensClothing"));
const Jewelery = lazy(()=>import("./Jewelery"));
const Electronics = lazy(()=>import("./Electronics"));
const WomensClothings = lazy(()=>import("./WomensClothing"));
const ErrorPage = lazy(()=>import("./ErrorPage"));
const Header = lazy(()=>import("./Navbar"));


const route = createBrowserRouter([
    {
        path:"/",
        element:<Header />,
        errorElement:<ErrorPage />,
        children: [
            {
                index: true,
                path:"/",
                element:<Index />
            },
            {
                index: true,
                path:"/Shop",
                element:<Shop />
            },
            {
                path:"/Mens-clothing",
                element:<MensClothing />
            },
            {
                path:"/Jewelery",
                element:<Jewelery />
            },
            {
                path:"/Electronics",
                element:<Electronics />
            },
            {
                path:"/WomensClothings",
                element:<WomensClothings />
            },
        ]
    },
  ]);
  

  const Route = () => {
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={route} />
      </Suspense>
    );
  };
  
  export default Route;