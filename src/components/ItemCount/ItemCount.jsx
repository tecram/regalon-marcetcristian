import './ItemCount.scss'
import { useState, useEffect } from "react"

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    //console.log("USE EFFECT COUNT");
  }, [count]);

  const onAdd = (operation) => {
    if (operation === "-" && count > 0) {
      setCount(count - 1);
    } else if (operation === "+" && count < stock) {
      setCount(count + 1);
    }
  };

  return ( 
    <div className='product-card'>
      <p className='product-title'>BOLSILLO ORGANIZADOR CON ADHESIVO</p>
      <div className='product-qty'>
        <button onClick={() => onAdd("-")}>-</button>
        <p>{count}</p>
        <button onClick={() => onAdd("+")}>+</button>
      </div>
      <p className='product-stock'>Stock disponible: {stock}</p>
      <button className='add-cart'>AGREGAR AL CARRITO</button>
    </div>
  )
}
 
export default ItemCount;