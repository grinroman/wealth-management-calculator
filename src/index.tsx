import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'styles/_reset.scss';
import 'styles/_index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
