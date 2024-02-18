import React from 'react'
import NavBar from './layout/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import ReactHooks from './concepts/reacthooks/ReactHooks'
import Zustand from './concepts/zustand/Zustand'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ReactHooks />}></Route>
        <Route path='/zustand' element={<Zustand />}></Route>
      </Routes>
    </>
  )
}

export default App