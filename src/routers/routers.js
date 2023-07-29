import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AllBooks } from '../components/sections/Allbooks';
import { App } from '../components/App';
import { BookPage } from '../components/BookPage';
import { CheckAccountModal } from '../components/sections/CommonPage/CommonMain/CheckAccountModal';
import { CommonPage } from '../components/sections/CommonPage';
import { LogIn } from '../components/Authorization/LogIn';
import { Settings } from '../components/sections/Settings';
import { SignUp } from '../components/Authorization/SignUp';
import { UserPage } from '../components/sections/UserPage';
import { YourOrders } from '../components/sections/YourOrders';
import { UserSearchBooks } from '../components/sections/UserSearchBooks';
import { StatusPage } from '../components/sections/YourOrders/StatusPage';

import { routeLinks } from '../constants/routeLinks';

const {
  allBooks,
  bookPage,
  bookStatus,
  checkAccount,
  login,
  orders,
  settings,
  signup,
  userBooks,
} = routeLinks;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<CommonPage />}>
        <Route path={checkAccount} element={<CheckAccountModal />} />
        <Route path={login} element={<LogIn />} />
        <Route path={signup} element={<SignUp />} />
      </Route>
      <Route element={<UserPage />}>
        <Route path={allBooks} element={<AllBooks />} />
        <Route path={userBooks} element={<UserSearchBooks />} />
        <Route path={`${bookPage}/:id`} element={<BookPage />} />
        <Route path={`${bookStatus}/:id`} element={<StatusPage />} />
        <Route path={settings} element={<Settings />} />
        <Route path={orders} element={<YourOrders />} />
      </Route>
    </Route>,
  ),
);
