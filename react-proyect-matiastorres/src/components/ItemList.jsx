import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4 d-flex justify-content-between flex-wrap align-items-center p-2">
          <Item product={product} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
