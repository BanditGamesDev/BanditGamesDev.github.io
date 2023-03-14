import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
//Routing in the Browser since its a web application
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);