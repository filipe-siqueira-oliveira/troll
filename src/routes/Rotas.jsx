import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import First from '../page/First';
import Second from '../page/Second';
import Third from "../page/Third"
import Quarter from "../page/Quarter"
import Fiveth from "../page/Fiveth"
import Sixth from "../page/Sixth"
import Seventh from '../page/Seventh';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<First/>} />
        <Route path="/second" element={<Second/>} />
        <Route path="/third" element={<Third/>} />
        <Route path="/quarter" element={<Quarter/>} />
        <Route path="/fiveth" element={<Fiveth/>} />
        <Route path="/sixth" element={<Sixth/>} />
        <Route path="/seventh" element={<Seventh/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;