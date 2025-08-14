import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CountryDetailPage from './pages/CountryDetailPage'
import './config/i18n'
import './styles/globals.scss'

// mean

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/country/:code' element={<CountryDetailPage/>} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
