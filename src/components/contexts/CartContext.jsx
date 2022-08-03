import React, { createContext, useEffect, useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  //crear coleccion nueva y llenarla con los campos
  const sendOrder = (totalPrice, buyerData, buyDate) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const order = { 
      items: cartItems,
      buyer: buyerData,
      total: totalPrice,
      date: buyDate
    }
    addDoc(orderCollection, order)
      .then(res => orderConfirmed(res.id))
      .catch(err => console.log("error", err))
  }

  const orderConfirmed = (orderId) => {
    console.log(orderId)
  }

  const changeStock = (changeItems) => {
    console.log(changeItems)
  }

  //actualizar un valor
  /* const updateData = () => {
    const db = getFirestore()
    const docRef = doc(db, "orders", "id fgdlgdflkjdifd")
    updateDoc(docRef, {total: 300}).then((res) => console.log("Actualizacion correcta"))

  } */

  //actualizar varios
  /* const multipleUpdates = () => {
    const db = getFirestore()
    const batch = writeBatch(db)
    const docRef = doc(db, "orders", "id fgdlgdflkjdifd")
    const docWithoutPrice = doc(db, "orders", "id l345kl43j")
    batch.update(docRef, { total: 180})
    batch.update(docWithoutPrice, {
      buyer: { mail: "test", name: "test", phone: "1111" },
    })
    batch.commit()
  } */

  useEffect( () => {
    isInCart()
  }, [cartItems])

  const isInCart = (itemId) => {
    let itemIndex = -1
    let qty = 0
    let isIn = false
    
    cartItems.forEach((element, index) => {
      if(element.item.id === itemId) {
        itemIndex = index
        qty = element.count
        isIn = true
      }
    })
    return [isIn, qty, itemIndex]
  }

  const addItem = (item, quantity) => {
    const [isIn, qty, itemIndex] = isInCart(item.id)
    let count = quantity

    if(isIn) {
      count = count + qty
      setCartItems(cartItems.splice(itemIndex, 1))
    }
    setCartItems([...cartItems,{item, count}])
  }

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((element) => element.item.id !== itemId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalizer = () => {
    return cartItems.reduce(
      (firstValue, secondValue) => firstValue + secondValue.item.price * secondValue.count, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, totalizer, removeItem, clearCart, sendOrder, changeStock }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider
