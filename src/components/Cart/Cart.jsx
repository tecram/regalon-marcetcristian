import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import "./Cart.scss"

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartItems } = useContext(CartContext)
  
  useEffect(() => {
    let total = 0
    cartItems.forEach((item, index) => {
      total += parseInt(item.price)
    });
    setTotalPrice(total)
  }, [cartItems])
  
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
              {cartItems.map((item) => (
                <tr>
                  <td className="cart-product-thumb">
                    <div className="cart-thumb-container">
                      <img src={item.pictureUrl} alt={item.title} />
                    </div>
                  </td>
                  <td className="cart-product-name">{item.title}</td>
                  <td>${item.price}</td>
                  <td>2</td>
                  <td>${item.price}</td>
                  <td><img src="../../assets/icons/trash-icon.svg" alt="Remover producto" /></td>
                </tr>
              ))}
            </tbody>
          </table>
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