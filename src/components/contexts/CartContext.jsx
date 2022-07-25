import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

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

  const removeItem = (itemId, count) => {
    console.log(itemId)
    console.log(count)
    console.log('remover')

    count = count - 1
    console.log(count)

    let cartFilter = cartItems.filter(checkProduct)

    const checkProduct = (prodId) => {
      console.log(prodId)

    }

    setCartItems([...cartItems,{item, count}])
  }

  const clearCart = () => {
    console.log('empty cart')
  }

  const totalizer = () => {
    return cartItems.reduce(
      (firstValue, secondValue) => firstValue + secondValue.item.price * secondValue.count, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, totalizer, removeItem, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider
