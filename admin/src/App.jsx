import React from 'react'
import Navbar from './components/sidebar/navabar/Navbar'
import Sidebar from './components/sidebar/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import List from './pages/LIST/List'
import Add from './pages/ADD/Add'
import Order from "./pages/ORDER/Orders";
import './app.css'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const url = "https://newfoodbackend.onrender.com"

  return (
    <div className='h'>
      <ToastContainer />
      <Navbar />

      <div className="appcontent flex">
        <Sidebar />

        <Routes>
          {/* Default route */}
          <Route path='/' element={<List url={url} />} />

          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          {/* Corrected orders route */}
          <Route path='/orders' element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
  
