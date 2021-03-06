import { lazy } from 'ice';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Notfound = lazy(() => import('@/pages/NotFound'));

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '*',
    exact: true,
    component: Notfound
  },
];
