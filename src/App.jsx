import React, {useState, createContext} from 'react'
import NavBar from './layout/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import ReactHooks from './concepts/reacthooks/ReactHooks'
import Zustand from './concepts/zustand/Zustand'

export const LoginToggleContext = createContext();
export const LoggedInContext = createContext();

const App = () => {

  const [showLoginContainer, setShowLoginContainer] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);

  const showContainer = () => {
    setShowLoginContainer(true);
    setLoggedIn(true);
    alert('set to true')
  }
  const hideContainer = () => {
    setShowLoginContainer(false);
    alert('set to false')
    setLoggedIn(false);
  }

  return (
    <>
    <LoggedInContext.Provider value={loggedIn}>
      <LoginToggleContext.Provider value={[showContainer, hideContainer]}>
        <NavBar />
      </LoginToggleContext.Provider>
      <Routes>
        <Route path='/' element={
          <LoginToggleContext.Provider value={[showContainer, hideContainer]}>
            <ReactHooks />
          </LoginToggleContext.Provider>
        }>
        </Route>
        <Route path='/zustand' element={<Zustand />}></Route>
      </Routes>
    </LoggedInContext.Provider>
    </>
  )
}

export default App