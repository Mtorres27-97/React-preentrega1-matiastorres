import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../mock/AsynMock'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    
    getProductById(id)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="alert alert-danger" role="alert">
        Producto no encontrado
      </div>
    )
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
