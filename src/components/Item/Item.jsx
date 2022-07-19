import './Item.scss'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const Item = ({ item }) => {
  const { name } = useParams()
  let image
  
  if(name) {
    image = '../'+item.pictureUrl
  }
  else {
    image = item.pictureUrl
  }

  return ( 
    <div className="product-card">
      <div className="product-image">
        <Link className="navbar-category" to={`/producto/${item.id}`}><img src={image} alt="" /></Link>
      </div>
      <Link className="product-link" to={`/producto/${item.id}`}><p className="product-name">{item.title}</p></Link>
      <p className="product-sku">SKU: {item.id}</p>
      <p className="product-price">$ {item.price}</p>
    </div>
   );
}
 
export default Item;