import React from "react";
import { NoResults } from './styles';

const EmptyResults = () => {
  return (
    <NoResults>
      <p>OOPSS!</p>
      <h1>We didn't find and results for your search input</h1>
      <a href="/">Back to search again</a>
    </NoResults>
  );
};
export default EmptyResults;
