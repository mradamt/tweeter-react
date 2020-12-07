import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <span id="tweeter-logo">tweeter</span>
      <div id="navbar-right-side">
          <span><strong>Write</strong> a new tweet</span>
          <img src="/images/down-arrow.png" alt="down-chevron-green" />
      </div>
    </nav>
  )
};