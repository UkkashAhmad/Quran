import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home/Home.jsx';
import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Parah from './Components/Parah/Parah.jsx';
import Sajda from './Components/Sajda/Sajda.jsx';
import About from './Components/About/About.jsx';
import ContactUs from './Components/Contact/Contact.jsx';
import SearchWords from './Components/SearchWords/SearchWords.jsx';
import Surah from './Components/Surah/Surah.jsx';
import Weather from './Components/Weather/Weather.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path : "",
        element: <Home/>
      },
      {
        path : "/about",
        element: <About/>
      },
      {
        path : "/parah",
        element: <Parah/>
      },
      {
        path : "/sajda",
        element: <Sajda/>
      },
      {
        path : "/contact",
        element: <ContactUs/>
      },
      {
        path : "/searchWords",
        element: <SearchWords/>
      },
      {
        path : "/surah",
        element: <Surah/>
      },
      {
        path : "/weather",
        element: <Weather/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
