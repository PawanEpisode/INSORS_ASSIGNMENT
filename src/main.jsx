import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import SignupBody from './components/SignupBody.jsx';
import Body from './components/Body.jsx';
import BrowseClothes from './components/BrowseClothes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browse",
        element: <BrowseClothes />,
      },
      {
        path: "/registration",
        element: <SignupBody />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
