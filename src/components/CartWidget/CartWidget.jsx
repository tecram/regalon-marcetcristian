import './CartWidget.scss'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart'>
      <span className='cart-icon'>
        <span className='cart-counter'>{cartItems.length}</span>
      </span>
      Mi carrito
    </div>
  )
}
 
export default CartWidget;