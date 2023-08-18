import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/navbar/navbar';
import reportWebVitals from './reportWebVitals';
import Hero from './component/Hero/hero'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>
);

reportWebVitals();
