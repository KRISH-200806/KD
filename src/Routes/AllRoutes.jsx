import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import KirtanDetail from '../pages/KirtanDetails';
import ContactPage from '../pages/ContactPage';
import AboutsPage from '../pages/AboutsPage';
import OffcanvasPage from '../components/Offcanavas';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/kirtan/:id" element={<KirtanDetail />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutsPage />}></Route>
        <Route path="/off" element={<OffcanvasPage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes