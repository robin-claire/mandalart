import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './app/store';

import { GlobalStyles } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutMandalart from './pages/AboutMandalart';
import AboutDevelopers from './pages/AboutDevelopers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/about-mandalart",
    element: <AboutMandalart />,
  },
  {
    path: "/about-developers",
    element: <AboutDevelopers />,
  },
])


const inputGlobalStyles = <GlobalStyles
  styles={{
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      background: '#ffffff',
      padding: 0,
      fontFamily: 'sans-serif',
    },
    'body, ol, ul, li': {
      margin: 0,
      padding: 0,
    },
    'ol, ul, li': {
      listStyle: 'none',
    },
  }}
/>


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {inputGlobalStyles}
        <RouterProvider router={router} />
      </Provider>
    </React.Fragment>
  )
}

export default App;