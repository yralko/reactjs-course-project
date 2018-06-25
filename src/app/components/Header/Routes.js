import FilmDescription from './FilmDescription';
import Searchbox from './Searchbox';

export default [
  {
    path: '/movies/:id',
    component: FilmDescription,
  },
  {
    path: '*',
    component: Searchbox,
  },
];
