import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
)
