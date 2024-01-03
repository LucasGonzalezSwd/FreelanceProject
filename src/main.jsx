import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <App />
          <Helmet>
            <title>PlayMakerTv</title>
            <meta name="PlayMakerTv" content="El objetivo de esta web es promocionar casino, debes ser mayor de edad para poder ingresar" />
            <meta name="keywords" content="casino, registro, apuesta" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:image" content="URL_de_la_imagen" />
            <meta property="og:type" content="website" />
          </Helmet>
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)