import { homeRoutes } from './home/home-routes';
import { productRoutes } from './product/product-routes';
import { categoryRoutes } from './category/category-routes';
import { favoriteRoutes } from './favorite/favorite-routes';

export const modulesRoutes = [
  {
    path: '',
    children: homeRoutes,
  },
  {
    path: 'product',
    children: productRoutes,
  },
  {
    path: 'category',
    children: categoryRoutes,
  },
  {
    path: 'favorite',
    children: favoriteRoutes,
  },
];
