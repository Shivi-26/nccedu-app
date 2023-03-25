import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from './Component/About';
import Register from './Component/login';
import Gallery from './Component/Gallery';
import NoteApp from './Component/NoteApp';
import Quiz from './Component/Quiz';
import SignUp from './Component/Register';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
        path:"/Register",
        element:<Register/>,
    },
    {
        path:"/About",
        element:<About/>,
    },
    {
        path:"/SignUp",
        element:<SignUp/>,
    },
    {
        path:"/Gallery",
        element:<Gallery/>,
    },
    {
        path:"/NoteApp",
        element:<NoteApp/>,
    },
    {
        path:"/Quiz",
        element:<Quiz/>,
    },
]);

const root=createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);