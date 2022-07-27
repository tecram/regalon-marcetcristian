import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const ItemDetail = ({ product, loading }) => {
  const { addItem } = useContext(CartContext)
  const [addedProduct, setAddedProduct] = useState(false)
  const [count, setCount] = useState(parseInt(1));

  const displayElements = () => {

    if(loading) {
      return (
        <>
          <div className="pdp-left-content">
            <div className="pdp-image"><img src={`../${product.pictureUrl}`} alt={product.title} /></div>
          </div>
          <div className="pdp-right-content">
            <div className="pdp-product-name">{product.title}</div>
            <div className="pdp-sku">SKU: {product.sku}</div>
            <div className="pdp-price">${product.price}</div>
            <div className="pdp-installments">{product.installments}</div>
            <div className="pdp-description-content">
              <p className="pdp-description-title">Descripción</p>
              <p className="pdp-description">{product.description}</p>
            </div>
            {addedProduct ? (
              <div>
                <h3 className="text-added">{count} productos agregados al carrito.</h3>
                <Link to="/cart"><button className="pdp-go-cart" >IR AL CARRITO</button></Link>
              </div>
              ) : (
                <ItemCount 
                  stock={product.stock} 
                  initial="1" 
                  onAdd={addItem} 
                  item={product} 
                  setAddedProduct={setAddedProduct}
                  count={count}
                  setCount={setCount} />
            )}
          </div>
        </>
      )
    }
    else {
      return <div className="spinner"></div>
    }
  }
  return displayElements()
}

export default ItemDetail;