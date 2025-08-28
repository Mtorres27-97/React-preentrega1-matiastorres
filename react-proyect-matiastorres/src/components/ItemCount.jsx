import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="d-flex flex-column align-items-start">
      <div className="btn-group mb-3" role="group">
        <button 
          type="button" 
          className="btn btn-outline-primary" 
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="btn btn-outline-primary" style={{ pointerEvents: 'none', minWidth: '50px' }}>
          {quantity}
        </span>
        <button 
          type="button" 
          className="btn btn-outline-primary" 
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      
      <button 
        className="btn btn-success" 
        onClick={() => onAdd(quantity)}
        disabled={stock <= 0}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
