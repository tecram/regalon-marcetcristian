import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  useEffect( () => {
    isInCart()
  }, [cartItems])

  const isInCart = (cartItems, amount) => {
    console.log("amount",amount)
    console.log("cartItems",cartItems)
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider
