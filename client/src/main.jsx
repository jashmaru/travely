import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About.jsx'
import Tours from './pages/Tours.jsx'
import Treks from './pages/Treks.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='tours' element={<Tours/>} />
          <Route path='treks' element={<Treks/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
