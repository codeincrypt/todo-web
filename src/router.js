// AUTH
import Login from './auth/login';

// USERS
import Home from './page/home';
import Profile from './page/profile';
import Tasks from './page/tasks';

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
  {
    path: '/tasks',
    component: Tasks,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
];