import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/base.css';
import './styles/fonts.css';
import './styles/main.css';
import './styles/vendor.css';

import App from './App';

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
