import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}>React Concepts</div>
        <div className={style.navLinks}>
            <NavLink to='/'>React Hooks</NavLink>
        </div>
    </nav>
  )
}

export default NavBar