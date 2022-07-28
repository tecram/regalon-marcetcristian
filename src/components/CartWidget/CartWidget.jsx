import './CartWidget.scss'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <>
    {cartItems.length > 0 &&
      <Link className="cart-link" to={"/cart"}>
        <div className='cart'>
            <span className='cart-icon'>
              <span className='cart-counter'>{cartItems.length}</span>
            </span>
          Mi carrito
        </div>
      </Link>
    }
    </>
  )
}
 
export default CartWidget;