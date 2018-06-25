import React from 'react';
import SearchResults from '../../../components/SearchResults';
import Pagination from '../../../components/Pagination';
import SearchResultsBar from '../../../components/Header/SearchResultsBar';

const ResultsPage = () => (
  <div>
    <SearchResultsBar />
    <SearchResults.component />
    <Pagination />
  </div>
);

export default ResultsPage;
