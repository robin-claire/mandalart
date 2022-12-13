import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <Error />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
