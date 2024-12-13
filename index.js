import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './minkue/Login';
import Page2 from './WooRam/Page2/Page2';
import Page3 from './WooRam/Page3/Page3';
import Page4 from './jaewon/page4/Page4';
import Page5 from './jaewon/page5/Page5';
import Page6 from './minkue/page6/Page6';
import Page7 from './giyeol/Page7/Page7';
import Page8 from './giyeol/Page8/Page8';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} /> 
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} /> 
    </Routes>
  </BrowserRouter>
);