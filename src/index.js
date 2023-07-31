import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './config/store';
import { BrowserRouter as Router } from "react-router-dom";
import i18n from './localization/i18'
import { I18nextProvider } from "react-i18next";

console.log(i18n)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Suspense fallback={<div className="mt-10 text-3xl font-bold text-center">Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </Suspense>
  </Router>
);

reportWebVitals();
