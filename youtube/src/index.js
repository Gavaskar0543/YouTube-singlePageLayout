import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider, BaseStyles} from '@primer/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BaseStyles>
    <App />
    </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>
);

