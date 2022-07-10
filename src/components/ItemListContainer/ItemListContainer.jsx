import './ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
  const onAdd = (count) => {
    console.log(count)
  }

  return ( 
    <section className="item-list-container">
      <p>{props.greeting}</p>
      <section className='product-cards'>
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
      </section>
    </section> 
  )
}
 
export default ItemListContainer;