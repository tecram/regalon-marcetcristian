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
    <div className='product-card'>
      <p className='product-title'>BOLSILLO ORGANIZADOR CON ADHESIVO</p>
      <div className='product-qty'>
        <button onClick={() => changeQty("-")}>-</button>
        <p>{count}</p>
        <button onClick={() => changeQty("+")}>+</button>
      </div>
      <p className='product-stock'>Stock disponible: {stock}</p>
      <button onClick={() => onAdd(count)} className='add-cart'>AGREGAR AL CARRITO</button>
    </div>
  )
}
 
export default ItemCount;