import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${product.title}`)
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" alt={product.title} />
      </div>
      <div className="col-md-6">
        <h1>{product.title}</h1>
        <p className="lead">{product.description}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
        
        <div className="mt-4">
          <ItemCount 
            stock={product.stock} 
            initial={1} 
            onAdd={handleOnAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
