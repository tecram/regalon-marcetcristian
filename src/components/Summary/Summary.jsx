import React, { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const Summary = () => {
  const { completeOrder } = useContext(CartContext)
  console.log('orden completa')
  console.log(completeOrder)
  return (
    <>
      <h3 className="product-summary-container">SUMMARY</h3>
    </>
  );
}
 
export default Summary