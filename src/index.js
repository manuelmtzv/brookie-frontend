
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { ReviewsContextProvider } from './context/ReviewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ReviewsContextProvider>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
      </ReviewsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
