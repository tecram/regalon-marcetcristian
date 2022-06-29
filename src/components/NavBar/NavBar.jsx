import './NavBar.scss'
import logo from '../../assets/logos/regalon-logo.png'

const NavBar = () => {
  return <>
    <header>
      <div className='pre-header'>Realizá tu pedido online y recibí increíbles beneficios!!</div>
      <div className='header'>
        <div className='header-container'>
          <div className='regalon-logo'><a href='/'><img alt='Regalon Logo' title='Regalon homepage' src={logo} /></a></div>
          <div className='search-bar'><input type='text' placeholder='Buscar...'></input></div>
          <div className='user-links'>
            <div className='user-content'>Mi Cuenta</div>
            <div className='cart'>Mi carrito</div>
          </div>
        </div>
        <div className='menu-container'>
          <ul>
            <li className="menu-item"><a href="/">PRODUCTOS</a></li>
            <li className="menu-item"><a href="/">MARCAS</a></li>
            <li className="menu-item"><a href="/">OFERTAS</a></li>
          </ul>
        </div>
      </div>
    </header>
  </>
}

export default NavBar