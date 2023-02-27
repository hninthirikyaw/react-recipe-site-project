import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Card from '../component/Card'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Home from '../component/Home'
import Navbar from '../component/Navbar'

const App = () => {
  return (
    <div className='container'>
        <Navbar />
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/card' element={<Card/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
