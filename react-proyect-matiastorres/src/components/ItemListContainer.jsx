import "../css/ItemListContainer.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from '../mock/AsynMock'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    
    fetchProducts
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error('Error al cargar productos:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      {greeting && <div className="p-4 bg-light rounded mb-4">
        <h2 className="text-center m-0">{greeting}</h2>
      </div>}
      
      {categoryId && (
        <h3 className="mb-4">Categoría: {categoryId}</h3>
      )}
      
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
