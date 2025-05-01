import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import KirtanDetailsPage from '../pages/KirtanDetailsPage'

function AllRoutes() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/contact' element={<ContactPage/>}></Route>
              <Route path='/kirtan/:id' element={<KirtanDetailsPage/>}></Route>
          </Routes>
    </div>
  )
}

export default AllRoutes