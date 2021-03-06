import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <ItemListContainer greeting="Bienvenido a la tienda Regalon" /> */}
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/categoria/:name" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  </>
}

export default App;
