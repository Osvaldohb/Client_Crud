import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Persons from './pages/Persons'
import NavBar from './components/NavBar'
import PersonAdd from './pages/PersonAdd'

function App() {
  return (
    <div>
    <NavBar></NavBar>
     <Routes>
     <Route path='/add' element={<PersonAdd/>}></Route>
     <Route path='/' element={<Persons/>}></Route>
     </Routes>
    </div>
  )
}

export default App