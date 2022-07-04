import './ItemListContainer.scss'

const ItemListContainer = (props) => {
  console.log(props.greeting)
  return ( <section className="item-list-container">{props.greeting}</section> );
}
 
export default ItemListContainer;