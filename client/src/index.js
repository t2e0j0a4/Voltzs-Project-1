import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Context API
import State from "./Context/State";

// React Router
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <State>
        <App/>
      </State>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();