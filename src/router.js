// AUTH
import Login from './auth/login';
import Redirect from './auth/redirect';
import Bugs from './page/bugs/bugs';

// USERS
import Home from './page/employee/home';
import Profile from './page/profile';
import Project from './page/employee/project/project';
import AddTask from './page/employee/todo/add-task';
import TaskProject from './page/employee/todo/taskproject';
import Tasks from './page/employee/todo/tasks';
import Tasksview from './page/employee/todo/taskview';

// ADMIN
import AdminHome from './page/admin/home';
import AdminProfile from './page/profile';
import AdminManageproject from './page/admin/project/manageproject';
import AdminProject from './page/admin/project/project';
import AdminAddTask from './page/admin/todo/add-task';
import AdminTaskProject from './page/admin/todo/taskproject';
import AdminTasks from './page/admin/todo/tasks';
import AdminTasksview from './page/admin/todo/taskview';


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
    component: Redirect,
    exact: true,
  },
  {
    path: '/emp',
    component: Home,
    exact: true,
  },
  {
    path: '/emp/bugs',
    component: Bugs,
    exact: true,
  },
  {
    path: '/emp/add-task',
    component: AddTask,
    exact: true,
  },
  {
    path: '/emp/task',
    component: Tasks,
    exact: true,
  },
  {
    path: '/emp/task/:taskid',
    component: Tasksview,
    exact: true,
  },
  {
    path: '/emp/project',
    component: Project,
    exact: true,
  },
  {
    path: '/emp/project/:projectcode',
    component: TaskProject,
    exact: true,
  },
  {
    path: '/emp/profile',
    component: Profile,
    exact: true,
  },
];

export const AdminRouter = [
  {
    path: '/admin',
    component: Home,
    exact: true,
  },
  {
    path: '/admin/home',
    component: Home,
    exact: true,
  },
  {
    path: '/admin/bugs',
    component: Bugs,
    exact: true,
  },
  {
    path: '/admin/add-task',
    component: AddTask,
    exact: true,
  },
  {
    path: '/admin/task',
    component: Tasks,
    exact: true,
  },
  {
    path: '/admin/task/:taskid',
    component: Tasksview,
    exact: true,
  },
  {
    path: '/admin/project',
    component: Project,
    exact: true,
  },
  {
    path: '/admin/project/:projectcode',
    component: TaskProject,
    exact: true,
  },
  {
    path: '/admin/manageproject',
    component: AdminManageproject,
    exact: true,
  },
  {
    path: '/admin/profile',
    component: Profile,
    exact: true,
  },
];