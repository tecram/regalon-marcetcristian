/* import './ItemListContainer.scss' */
import ProductDetail from '../../product-detail.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const displayProductId = "1"

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(ProductDetail), 2000)
    });
    promise.then((res) => setLoading(true))
  }, []);

  const getItem = () => {
    return ProductDetail.filter(item => item.id === displayProductId)
  }

  return ( 
    <section className='product-detail'>
      <ItemDetail product={getItem()} loading={loading} />
    </section>
  );
}
 
export default ItemDetailContainer;