import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
//import Mario from './components/Mario';
//import Luigi from './components/Luigi';
//import DefaultProfile from './components/DefaultProfile';
import './index.css';

const ErrorPage: React.FC = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <a href="/">Go to Main Page</a>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
