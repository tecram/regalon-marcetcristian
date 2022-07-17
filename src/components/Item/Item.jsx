import './Item.scss'

const Item = ({ item }) => {
  console.log(item)
  return ( 
    <div className="product-card">
      <div className="product-image">
        <img src={item.pictureUrl} alt="" />
        {(() => {
          if(item.offer)
            return <span className='offer-badge'>OFERTA</span>
        })()}
      </div>
      <p className="product-name">{item.title}</p>
      <p className="product-sku">SKU: {item.id}</p>
      <p className="product-price">$ {item.price}</p>
    </div>
   );
}
 
export default Item;