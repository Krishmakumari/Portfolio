import React from 'react';

const FallbackScene = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading 3D Scene...</p>
        <p className="text-gray-400 text-sm mt-2">If this takes too long, please refresh the page</p>
      </div>
    </div>
  );
};

export default FallbackScene;