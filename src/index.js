import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import ListOfEmployees from './Pages/ListOfEmployees/ListOfEmployees'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<ListOfEmployees />} />

    </Routes>
  </ BrowserRouter>
);

reportWebVitals();
