import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  console.log(props)

  const isInCart = (item) => {
    console.log(cartItems)
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider
