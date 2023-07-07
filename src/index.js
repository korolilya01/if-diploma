import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
// import { App } from './Components/App';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './routers';
// import { App } from './components/App';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    <RouterProvider router={router} />
    {/*<App />*/}
    {/*</BrowserRouter>*/}
  </React.StrictMode>,
);
