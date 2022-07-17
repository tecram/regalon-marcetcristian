import './ItemDetail.scss'

const ItemDetail = ({ product, loading }) => {
  console.log(product[0].pictureUrl)
  const displayElements = () => {
    if(loading) {
      return (
        <>
          <div className="pdp-left-content">
            <div className="pdp-image"><img src={product[0].pictureUrl} alt={product[0].title} /></div>
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
            <div className="pdp-buy"><button className="pdp-buy-button" >AGREGAR AL CARRITO</button></div>
          </div>
        </>
      )
    }
    else {
      return <h4>Cargando...</h4>
    }
  }
  return displayElements()
}
 
export default ItemDetail;