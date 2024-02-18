import React from 'react'
import NavBar from './layout/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import ReactHooks from './concepts/reacthooks/ReactHooks'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ReactHooks />}></Route>
      </Routes>
    </>
  )
}

export default App