import './Item.scss'

const Item = ({ item }) => {
  return ( 
    <div className="product-card">
      <div className="product-image"><img src={item.pictureUrl} alt="" /></div>
      <p className="product-name">{item.title}</p>
      <p className="product-sku">SKU: {item.id}</p>
      <p className="product-price">$ {item.price}</p>
    </div>
   );
}
 
export default Item;