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

  useEffect(()=>{
    const promise =new Promise((resolve)=>{
      setTimeout(()=>{
        if(name){
          resolve(Products.filter((product)=> product.category=== name));
        }else{
          resolve(Products);
        }
      },2000)
    })
    promise.then((res)=>{
      setItems(res);
      setLoading(true);
    })
    return () => {
      setLoading(false)
    }
  },[name])
  
  return <>
    <section className="item-list-container">
      <ItemList items={items} loading={loading} />
    </section> 
  </> 
}
 
export default ItemListContainer;