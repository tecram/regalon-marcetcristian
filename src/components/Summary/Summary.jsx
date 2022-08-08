import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import "./Summary.scss"

const Summary = () => {
  const { completeOrder } = useContext(CartContext)
  console.log(completeOrder)
  return (
    <>
      {/* {(completeOrder.length >0 && */}
        <section className="product-summary-container">
          <h3>Muchas gracias por tu compra</h3>
          <p className="product-summary-title">Resumen de compra</p>
          <p className="product-summary-code"><span className="bold">Tu código de compra: </span>{completeOrder.orderId}</p>

          <p className="product-summary-buyer-title">Tus datos</p>
          <p className="product-summary-buyer-name"><span className="bold">Nombre: </span>{completeOrder.buyer[0]}</p>
          <p className="product-summary-buyer-mail"><span className="bold">Email: </span>{completeOrder.buyer[1]}</p>
          <p className="product-summary-buyer-phone"><span className="bold">Teléfono: </span>{completeOrder.buyer[1]}</p>
          <p className="product-summary-buyer-phone"><span className="bold">Fecha de compra: </span>{completeOrder.date}</p>
          <h4>Productos</h4>

          <table>
            <tbody>
            {completeOrder.items.map((product, index) => (
              <>
                <tr key={index}>
                  <td width={50}><img alt={product.item.title} src={product.item.pictureUrl} /></td>
                  <td align="left" className="product-name">{product.item.title}</td>
                  <td>X{product.count}</td>
                  <td>${product.item.price * product.count}</td>
                </tr>
              </>
            ))}
              <tr>
                <td className="summary-total" colSpan={2}>Total: ${completeOrder.total}</td>
              </tr>
            </tbody>
          </table>
        </section>
      // )}
    </>
  );
}
 
export default Summary