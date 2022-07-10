import Item from "../Item/Item";

const ItemList = ({ items, loading }) => {
  const displayElements = () => {
    if(loading) {
      return items.map( (item, index) => <Item item={item} key={index} />)
    }
    else {
      return <h4>Cargando...</h4>
    }
  }
  return displayElements()
}
 
export default ItemList;