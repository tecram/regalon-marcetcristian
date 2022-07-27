import './ItemCount.scss'

const ItemCount = ({stock, initial, onAdd, item, setAddedProduct, count, setCount}) => {
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
    <div className="pdp-buy">
      <button 
        onClick={() => {
          onAdd(item, count)
          setAddedProduct(true)
        }} 
        className="pdp-buy-button">
          AGREGAR AL CARRITO
      </button>
    </div>
    </>
  )
}
 
export default ItemCount;