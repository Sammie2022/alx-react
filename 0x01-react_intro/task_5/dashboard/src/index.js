import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className='root-notifications'>
      <App />
    </div>
  </React.StrictMode>
);
