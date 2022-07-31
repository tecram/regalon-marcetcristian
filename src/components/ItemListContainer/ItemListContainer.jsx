import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([])
  const { name } = useParams();

  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db, "items")
    getDocs(itemsCollection).then( (snapshot) => {
      const data = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()}))
      
      if(name){
        setItems(data.filter((product)=> product.category === name))
      }else{
        setItems(data)
      }
      setLoading(true)
    })
  },[name])
  
  return <>
    <section className="item-list-container">
      <ItemList items={items} loading={loading} />
    </section> 
  </> 
}
 
export default ItemListContainer;