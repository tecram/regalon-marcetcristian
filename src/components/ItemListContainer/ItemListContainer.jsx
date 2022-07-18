import './ItemListContainer.scss'
import Products from '../../product-detail.json'
/* import ItemCount from '../ItemCount/ItemCount'; */
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      /* setTimeout( () => resolve(Products), 2000) */
      setTimeout(() => {
        const products = resolve(Products)
        if (name) {
          setItems(products.filter((product) => product.category === name));
        } else {
          setItems(products);
        }
      }, 2000);
    });
    promise.then((res) => setLoading(true))
  }, [name]);
  
  console.log('items',items)
  console.log('name',name)

  return <>
    <section className="item-list-container">
      <ItemList items={Products} loading={loading} />
    </section> 
  </> 
}
 
export default ItemListContainer;