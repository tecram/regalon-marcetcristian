import './NavBar.scss'
import logo from '../../assets/logos/regalon-logo.png';

const NavBar = () => {
  return <>
    <header>
      <div className='pre-header'>Realizá tu pedido online y recibí increíbles beneficios!!</div>
      <div className='header'>
        <div className='header-container general-container'>
          <div className='regalon-logo'><a href='/'><img alt='Regalon Logo' src={logo} /></a></div>
        </div>
      </div>
    </header>
  </>
}

export default NavBar