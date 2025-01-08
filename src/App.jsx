import React, { useState } from 'react';
import Header from './Header/Header';
import SearchQuery from './searchQuery/searchQuery';




const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchQuery />
    </div>
  );
};

export default App;
