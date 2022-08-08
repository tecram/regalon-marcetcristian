import React, { createContext, useEffect, useState } from "react"
import { addDoc, collection, getFirestore, documentId, query, writeBatch, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom"

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [orderId, setOrderId] = useState()
  const [completeOrder, setCompleteOrder] = useState({})
  let navigate = useNavigate()

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
      .then(res => {
        setOrderId(res.id)
        setCompleteOrder({...order, orderId: res.id})
        orderConfirmed()
    })
      .catch(err => console.log("error", err))
  }

  const orderConfirmed = () => {
    return navigate("../summary", { replace: true })
  }

  const changeStock = async(changeItems) => {
    const db = getFirestore()
    const queryCollection = collection(db, "items")

    const queryStock = await query(
      queryCollection,
      where(
        documentId(),
        "in",
        changeItems.map(e => e.item.id)
      )
    )

    const batch = writeBatch(db)
    await getDocs(queryStock).then(res =>
      res.docs.forEach(e => batch.update(e.ref, {
        stock: e.data().stock - changeItems.find(element => element.item.id === e.id).count
      }))  
    )
    batch.commit()
  }

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
    <CartContext.Provider value={{ cartItems, addItem, totalizer, removeItem, clearCart, sendOrder, changeStock, orderId, completeOrder }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider
