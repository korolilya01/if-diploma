import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '../components/App';
import { CommonPage } from '../components/CommonPage';
import { LogIn } from '../components/Authorization/LogIn';
import { SingUp } from '../components/Authorization/SingUp';
import { UserPage } from '../components/UserPage';
import { Settings } from '../components/Settings';
import { Allbooks } from '../components/Allbooks';
import { BookPage } from '../components/BookPage';
import { YourOrders } from '../components/YourOrders';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<CommonPage />}>
        <Route path="/login" element={<LogIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Route>
      <Route element={<UserPage />}>
        <Route path="/allbooks" element={<Allbooks />} />
        <Route path="/bookPage/:id" element={<BookPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/orders" element={<YourOrders />} />
      </Route>
    </Route>,
  ),
);