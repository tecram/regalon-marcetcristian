import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, "items", id)
    getDoc(docRef).then((snapshot) => { 
      const data = {id: snapshot.id, ...snapshot.data()}
      
      if(product) {
        console.log('product true')
      }
      setProduct(data)
      setLoading(true)
      return data
    })
  }, [id])
  
  return (
    <>
      {product ? (
        <section className='product-detail'>
          <ItemDetail product={product} loading={loading} />
        </section>
      ) : (
        <section className='product-detail-error'>
          <p>Producto no encontrado.</p>
        </section>
      )}
    </>
  )
}
 
export default ItemDetailContainer;