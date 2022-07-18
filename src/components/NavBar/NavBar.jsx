import './NavBar.scss'
import logo from '../../assets/logos/regalon-logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return <>
    <header>
      <div className='pre-header'>Realizá tu pedido online y recibí increíbles beneficios!!</div>
      <div className='header'>
        <div className='header-container'>
          <Link className="navbar-category" to={"/"}><div className='regalon-logo'><img alt='Regalon Logo' title='Regalon homepage' src={logo} /></div></Link>
          <div className='search-bar'><input type='text' placeholder='Buscar...'></input></div>
          <div className='user-links'>
            <div className='user-content'>Mi Cuenta</div>
            <CartWidget />
          </div>
        </div>
        <div className='menu-container'>
          <ul>
            <Link className="navbar-category" to={"/"}><li className="menu-item">PRODUCTOS</li></Link>
            <Link className="navbar-category" to={"/category/indoor"}><li className="menu-item">INDOOR</li></Link>
            <Link className="navbar-category" to={"/category/outdoor"}></Link><li className="menu-item">OUTDOOR</li>
          </ul>
        </div>
      </div>
    </header>
  </>
}

export default NavBar