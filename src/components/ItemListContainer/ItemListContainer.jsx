import './ItemListContainer.scss'

const ItemListContainer = (props) => {
  return ( <section className="item-list-container">{props.greeting}</section> );
}
 
export default ItemListContainer;