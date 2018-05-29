import React from 'react';
import classes from './index.css';
import SearchResults from '../../../components/SearchResults';
import Pagination from '../../../components/Pagination';
import SearchResultsBar from '../../../components/Header/SearchResultsBar';

const ResultsPage = () => (
  <div>
    <SearchResultsBar />
    <SearchResults />
    <Pagination />
  </div>
);

export default ResultsPage;
