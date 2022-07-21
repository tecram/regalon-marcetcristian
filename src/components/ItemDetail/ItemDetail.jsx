import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product, loading }) => {
  const [amount, setAmount] = useState(0);

  const onAdd = (amount) => {
    setAmount(amount);
  };

  const displayElements = () => {
    if(loading) {
      return (
        <>
          <div className="pdp-left-content">
            <div className="pdp-image"><img src={`../${product[0].pictureUrl}`} alt={product[0].title} /></div>
          </div>
          <div className="pdp-right-content">
            <div className="pdp-product-name">{product[0].title}</div>
            <div className="pdp-sku">SKU: {product[0].sku}</div>
            <div className="pdp-price">${product[0].price}</div>
            <div className="pdp-installments">{product[0].installments}</div>
            <div className="pdp-description-content">
              <p className="pdp-description-title">Descripción</p>
              <p className="pdp-description">{product[0].description}</p>
            </div>
            {amount === 0 ? (
              <ItemCount stock={product[0].stock} initial="1" onAdd={onAdd} />
            ) : (
              <div>
                <h3 className="text-added">{amount} productos agregados al carrito.</h3>
                <Link to="/cart"><button className="pdp-go-cart" >IR AL CARRITO</button></Link>
              </div>
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