import React from 'react';

const Container = ({ children }) => {
  return (
    // Responsive padding: smaller on mobile, larger on desktop
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  );
};

export default Container;