import React, { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  // 'sidebar' or 'navbar'
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem('app_layout_preference') || 'sidebar';
  });

  const toggleLayout = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('app_layout_preference', newLayout);
  };

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
