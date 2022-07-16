import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la tienda Regalon" />
        {/* <ItemDetailContainer /> */}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
