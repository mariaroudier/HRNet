import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import Home from './Pages/Home/Home';
import ListOfEmployees from './Pages/ListOfEmployees/ListOfEmployees'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<ListOfEmployees />} />
        </Routes>
      </PersistGate>
    </Provider>
  </ BrowserRouter>
);

