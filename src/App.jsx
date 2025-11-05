import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}
