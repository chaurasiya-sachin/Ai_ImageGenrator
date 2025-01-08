import React, { useState } from 'react';
import Header from './Header/Header';
import QuerySearch from './QuerySearch/QuerySearch.jsx';




const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <QuerySearch />
    </div>
  );
};

export default App;
