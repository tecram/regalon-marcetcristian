/* import './ItemListContainer.scss' */
import ProductDetail from '../../product-detail.json'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(ProductDetail), 2000)
    });
    promise.then((res) => setLoading(true))
  }, []);



  return ( 
    <section className='product-detail'>
      <ItemDetail product={ProductDetail} loading={loading} />
    </section>
  );
}
 
export default ItemDetailContainer;