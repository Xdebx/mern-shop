import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>

  //   <BrowserRouter>
  //     {/* <AlertProvider template={AlertTemplate} {...options}> */}
  //       <App />
  //       <ToastContainer />
  //     {/* </AlertProvider> */}
  //   </BrowserRouter>
  // </Provider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <ToastContainer /> */}
    </BrowserRouter>
  </Provider>
);