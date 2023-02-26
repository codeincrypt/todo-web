// AUTH
import Login from './auth/login';

// USERS
import Home from './page/home';
import Profile from './page/profile';
import Manageproject from './page/project/manageproject';
import Project from './page/project/project';
import AddTask from './page/todo/add-task';
import Tasks from './page/todo/tasks';
import Tasksview from './page/todo/taskview';

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
    path: '/add-task',
    component: AddTask,
    exact: true,
  },
  {
    path: '/task',
    component: Tasks,
    exact: true,
  },
  {
    path: '/task/:taskid',
    component: Tasksview,
    exact: true,
  },
  {
    path: '/project',
    component: Project,
    exact: true,
  },
  {
    path: '/manageproject',
    component: Manageproject,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
];