import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import ProfilePage from '../src/pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-cover" >
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App