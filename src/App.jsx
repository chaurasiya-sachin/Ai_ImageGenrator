import React, { useState } from 'react';
import Header from './Header/Header';
import SearchQuery from './SearchQuery/SearchQuery.jsx';




const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchQuery />
    </div>
  );
};

export default App;
