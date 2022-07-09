import './ItemListContainer.scss'
/* import ItemCount from '../ItemCount/ItemCount'; */
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
  return ( 
    <section className="item-list-container">
      {/* <p>{props.greeting}</p>
      <section className='product-cards'>
        <ItemCount stock="5" initial="1" />
      </section> */}
      <ItemList />
    </section> 
  )
}
 
export default ItemListContainer;