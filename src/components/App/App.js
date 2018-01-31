import React from 'react';
import Header from '../Header/Header';
import './App.css';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
