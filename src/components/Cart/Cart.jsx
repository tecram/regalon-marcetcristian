import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import "./Cart.scss"

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  /* const { cartItems } = useContext(CartContext) */
  const { cartItems, totalizer, removeItem, clearCart } = useContext(CartContext)
  
  useEffect(() => {
    setTotalPrice(totalizer())
  }, [])
  
  return (
    <>
      <section className="cart-container">
        <div className="cart-left">
          <table>
            <thead>
              <tr>
                <th className="cart-product-table-title" colSpan={2}>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr>
                  <td className="cart-product-thumb">
                    <div className="cart-thumb-container">
                      <img src={product.item.pictureUrl} alt={product.item.title} />
                    </div>
                  </td>
                  <td className="cart-product-name">{product.item.title}</td>
                  <td>${product.item.price}</td>
                  <td>{product.count}</td>
                  <td>${product.item.price * product.count}</td>
                  <td><div onClick={() => removeItem(product.item.id, product.count)}><img className="trash-icon" src="assets/icons/trash-icon.svg" alt="Remover producto" title="Remover producto" /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div onClick={() => clearCart()} className="empty-cart">Vaciar carrito</div>
        </div>
        <div className="cart-right">
          <h3>Resumen de compra</h3>
          <p className="cart-coupon">Cupón de descuento</p>
          <p className="cart-delivery">Calcular envío</p>
          <p className="cart-subtotal">
            <span className="cart-subtotal-title">Subtotal</span>
            <span className="cart-subtotal-value">${totalPrice}</span>
          </p>
          <p className="cart-total">
            <span className="cart-total-title">Total</span>
            <span className="cart-total-value">${totalPrice}</span>
          </p>
          <button className="buy-button">INICIAR COMPRA</button>
        </div>
      </section>
    </>
  );
};

export default Cart