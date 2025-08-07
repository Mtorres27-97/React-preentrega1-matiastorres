import "../css/ItemListContainer.css"


const ItemListContainer = ({ Bienvenidos }) => {
  return (
    <div className="item-list-container">
      <h2 className="greeting-message">{Bienvenidos}</h2>
    </div>
  )
}
export default ItemListContainer