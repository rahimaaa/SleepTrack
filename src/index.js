import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const scrollPosition = parseInt(localStorage.getItem('scrollPosition')) || 0;
window.scrollTo(0, scrollPosition);
localStorage.removeItem('scrollPosition');
root.render(
    <App />
);

reportWebVitals();