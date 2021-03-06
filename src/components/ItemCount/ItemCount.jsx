import './ItemCount.scss'
import { useState, useEffect } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));
  
  useEffect(() => {
    //console.log("USE EFFECT COUNT");
  }, [count])

  const changeQty = (operation) => {
    if (operation === "-" && count > 0) {
      setCount(count - 1);
    } else if (operation === "+" && count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <>
    <div className="product-qty-container">
      <div className='product-qty'>
        <button onClick={() => changeQty("-")}>-</button>
        <p>{count}</p>
        <button onClick={() => changeQty("+")}>+</button>
      </div>
    </div>
    <p className="product-stock">Stock: {stock}</p>
    <div className="pdp-buy"><button onClick={() => onAdd(count)} className="pdp-buy-button">AGREGAR AL CARRITO</button></div>
    </>
  )
}
 
export default ItemCount;