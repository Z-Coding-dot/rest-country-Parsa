import React from 'react'
import Header from './widgets/Header/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
