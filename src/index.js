// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se vuoi misurare le prestazioni dell'applicazione
// puoi passare una funzione per registrare i risultati
// o inviarli a un endpoint di analytics.
// Ulteriori informazioni: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
