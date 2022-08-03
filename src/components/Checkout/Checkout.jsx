import './Checkout.scss'
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartItems, totalizer, sendOrder, changeStock } = useContext(CartContext)

  useEffect(() => {
    setTotalPrice(totalizer())
  }, [cartItems])

  const onSubmit = (e) => {
    e.preventDefault()
    const inputsValues = document.getElementsByTagName("input")
    const data = Array.from(inputsValues).map((input, index) => input.value)
    data.shift()
    const today  = new Date()
    const buyDate = today.toLocaleDateString("es-ES")
    
    const changeItems = "destructuracion"
    console.log(changeItems)
    //sendOrder(totalPrice, data, buyDate)
    changeStock(changeItems)
  }

  return ( 
    <>
      <section className="checkout-container">
        {cartItems.length >0 ? (
          <div className="checkout-data">
            <div className="checkout-left">
              <h3>Completá tus datos para finalizar la compra</h3>
              <form>
                <input type="text" name="name" placeholder="Nombre*" required />
                <input type="email" name="email" placeholder="Email*" required />
                <input type="tel" name="tel" placeholder="Teléfono*" required />
                <button onClick={onSubmit} type="submit">CONFIRMAR DATOS</button>
              </form>
            </div>
            <div className="checkout-right">
              <table>
                <tbody>
                  {cartItems.map((product, index) => (
                    <>
                      <tr className="product-row-top" key={index}>
                        <td colSpan={2} className="product-image-name"><img src={product.item.pictureUrl} alt={product.item.title} /><span>{product.item.title}</span></td>
                      </tr>
                      <tr className="product-row-bottom">
                        <td align="left" className="product-qty"><span>Cantidad:</span> {product.count}</td>
                        <td align="right" className="product-price">${product.item.price * product.count}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <div className="checkout-totals">
                <div className="subtotal">
                  <p className="subtotal-text">Subtotal</p>
                  <p className="subtotal-value">$ {totalPrice}</p>
                </div>
                <div className="total">
                  <p className="total-text">Total</p>
                  <p className="total-value">$ {totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="empty-checkout-container">
              <h3 className="empty-checkout">Carrito sin productos.</h3>
              <p className="empty-checkout-btn"><Link to="/">Volver</Link></p>
            </div>
          </>
        )}
      </section>
    </>
   )
}

export default Checkout;