import InitialPage from './InitialPage';
import ResultsPage from './ResultsPage';
import FourOhFour from './FourOhFour';
import SearchResults from '../../components/SearchResults';

export default [
  {
    path: '/',
    component: InitialPage,
    exact: true,
  },
  {
    path: '/movies',
    ...SearchResults,
  },
  {
    path: '*',
    component: FourOhFour,
  },
];
