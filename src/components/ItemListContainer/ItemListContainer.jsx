import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([])
  const { name } = useParams();

  useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db, "items")
    
    if(name){
      const filteredCollection = query(itemCollection, where("category", "==", name))
      getDocs(filteredCollection).then( (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setItems(items)
      })
    }
    else{
      getDocs(itemCollection).then( (snapshot) => {
        const items = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()}))
        setItems(items)
      })
    }
    setLoading(true)
  },[name])
  
  return <>
    <section className="item-list-container">
      <ItemList items={items} loading={loading} />
    </section> 
  </> 
}
 
export default ItemListContainer;