// AUTH
import Login from './auth/login';

// USERS
import Home from './page/home';

export const MainRouter = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

export const UserRouter = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
];