import React from 'react';
import classes from './index.css';
import SearchResults from '../../../components/SearchResults';
import Pagination from '../../../components/Pagination';

const ResultsPage = () => (
  <div>
    <SearchResults />
    <Pagination />
  </div>
);

export default ResultsPage;
