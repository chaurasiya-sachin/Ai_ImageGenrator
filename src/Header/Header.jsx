import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-center items-end bg-gray-800 p-4">
      <h1 className="text-white text-4xl font-bold mr-4">Image Generator</h1>
      <p className="text-white text-sm mt-2">Express your feeling into image</p>
    </div>
  );
};

export default Header