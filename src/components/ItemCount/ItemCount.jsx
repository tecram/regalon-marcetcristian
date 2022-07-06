import './ItemCount.scss'
/* import productImage from '../../assets/products/producto1.jpg' */
import { useState, useEffect } from "react"

const ItemCount = ({img, name, stock, initial}) => {
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
      <div className='product-image'>
        <img src={img} alt={name} />
        {/* <img src={productImage} alt="" /> */}
      </div>
      <p className='product-title'>{name}</p>
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