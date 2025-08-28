import "../css/CartWidget.css"
import { useState } from 'react'

const CartWidget = () => {
  const [count] = useState(3) // simula que hay 3 items en el carrito
  return (
    <div className="d-flex align-items-center">
      <div className="position-relative">
        <span role="img" aria-label="carrito" style={{ fontSize: '1.6rem' }}>🛒</span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {count}
        </span>
      </div>
    </div>
  )
}

export default CartWidget