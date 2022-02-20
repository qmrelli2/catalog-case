import { homeRoutes } from './home/home-modules';

export const modulesRoutes = [
  {
    path: '',
    children: homeRoutes,
  },
];
