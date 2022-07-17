import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <ItemListContainer greeting="Bienvenido a la tienda Regalon" /> */}
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/category/:name" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  </>
}

export default App;
