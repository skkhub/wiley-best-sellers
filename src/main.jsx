import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BestSellers from '@/pages/BestSellers';
import Home from '@/pages/Home';
import '@/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bestsellers' element={<BestSellers />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
