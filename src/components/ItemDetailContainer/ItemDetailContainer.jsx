/* import './ItemListContainer.scss' */
import ProductDetail from '../../product-detail.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(ProductDetail), 2000)
    });
    promise.then((res) => setLoading(true))
  }, [id]);

  const getItem = () => {
    return ProductDetail.filter(item => item.id === id).shift()
  }

  return ( 
    <section className='product-detail'>
      <ItemDetail product={getItem()} loading={loading} />
    </section>
  );
}
 
export default ItemDetailContainer;