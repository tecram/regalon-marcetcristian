import './NavBar.scss'
import logo from '../../assets/logos/regalon-logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return <>
    <header>
      <div className='pre-header'>Realizá tu pedido online y recibí increíbles beneficios!!</div>
      <div className='header'>
        <div className='header-container'>
          <div className='regalon-logo'><img alt='Regalon Logo' title='Regalon homepage' src={logo} /></div>
          <div className='search-bar'><input type='text' placeholder='Buscar...'></input></div>
          <div className='user-links'>
            <div className='user-content'>Mi Cuenta</div>
            <CartWidget />
          </div>
        </div>
        <div className='menu-container'>
          <ul>
            <li className="menu-item">PRODUCTOS</li>
            <li className="menu-item">MARCAS</li>
            <li className="menu-item">OFERTAS</li>
          </ul>
        </div>
      </div>
    </header>
  </>
}

export default NavBar