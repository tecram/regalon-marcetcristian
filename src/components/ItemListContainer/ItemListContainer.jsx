import './ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
  return ( 
    <section className="item-list-container">
      <p>{props.greeting}</p>
      <section className='product-cards'>
        <ItemCount img="assets/products/producto1.jpg" name="BOLSILLO ORGANIZADOR CON ADHESIVO" stock="5" initial="1" />
        <ItemCount img="assets/products/botella-deportiva.jpg" name="BOTELLA DEPORTIVA" stock="10" initial="1" />
      </section>
    </section> 
  )
}
 
export default ItemListContainer;