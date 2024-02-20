import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
import { useContext } from 'react'
import { LoggedInContext, LoginToggleContext } from '../../App'

const NavBar = () => {
  const [showLogin, hideLogin] = useContext(LoginToggleContext);
  const loggedin = useContext(LoggedInContext);

  return (
    <nav className={style.navbar}>
        <div className={style.logo}>React Concepts</div>
        <div className={style.navLinks}>
            <NavLink to='/'>React Hooks</NavLink>
            <NavLink to='/zustand'>Zustand</NavLink>
            <button onClick={showLogin} >show login</button>
            <button onClick={hideLogin} >hide login</button>
            {/*  */}
            <button>{loggedin ? "Sign Out" : "Sign In"}</button>
        </div>
    </nav>
  )
}

export default NavBar