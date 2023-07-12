import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Allbooks } from '../components/Allbooks';
import { App } from '../components/App';
import { BookPage } from '../components/BookPage';
import { CheckAccountModal } from '../components/CommonPage/CommonMain/CheckAccountModal';
import { CommonPage } from '../components/CommonPage';
import { LogIn } from '../components/Authorization/LogIn';
import { Settings } from '../components/Settings';
import { SignUp } from '../components/Authorization/SignUp';
import { UserPage } from '../components/UserPage';
import { YourOrders } from '../components/YourOrders';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<CommonPage />}>
        <Route path="/checkAccount" element={<CheckAccountModal />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
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
