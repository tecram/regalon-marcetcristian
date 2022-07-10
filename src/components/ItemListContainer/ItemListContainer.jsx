import './ItemListContainer.scss'
import Products from '../../products.json'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout( () => resolve(Products), 2000)
    });
    promise.then((res) => setLoading(true))
  }, []);

  return ( 
    <section className="item-list-container">
      <ItemList items={Products} loading={loading} />
    </section> 
  )
}
 
export default ItemListContainer;