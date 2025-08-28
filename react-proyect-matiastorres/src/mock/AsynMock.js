const products = [
  {
    id: '01',
    title: 'MSI GeForce RTX 5060 8G VENTUS 2X OC',
    description: 'tarjeta gráfica MSI RTX 5060 VENTUS 2X OC de 8GB lleva tu experiencia gaming al siguiente nivel',
    price: 358000,
    image: 'https://i.postimg.cc/bN9mk4gt/2088263-picture-1748271136.png',
    category: 'Componentes',
    stock: 10
  },
  {
    id: '02',
    title: 'Palit GeForce RTX 5060 Ti Infinity 3 16GB',
    description: ' tarjeta de video orientada a usuarios que buscan un rendimiento avanzado para juegos y creación de contenido',
    price: 589000,
    image: 'https://i.postimg.cc/5yRNRsqq/2091195-picture-1748617459.png',
    category: 'Componentes',
    stock: 5
  },
  {
    id: '03',
    title: 'Kit Memoria RAM Kingston FURY Beast 32GB DDR5 6000MHz CL30',
    description: 'Kingston FURY Beast de 32GB DDR5, compuesta por dos módulos de 16GB, ofrece velocidades ultrarrápidas de 6000MHz y latencia CL30',
    price: 147000,
    image: 'https://i.postimg.cc/WzJQsSc7/1502167-picture-1638271279.png',
    category: 'Componentes',
    stock: 15
  },
  {
    id: '04',
    title: 'Amazon Echo Dot 5th Gen - Charcoal',
    description: 'parlante inteligente compacto que ofrece una experiencia de audio mejorada con Alexa integrada',
    price: 59999,
    image: 'https://i.postimg.cc/J4QsNCFZ/1680324-picture-1670875895.png',
    category: 'SmartHome',
    stock: 8
  },
  {
    id: '05',
    title: 'Ampolleta Inteligente Philips Smart 4.7 ',
    description: 'Ampolletas Inteligentes',
    price: 49999,
    image: 'https://i.postimg.cc/fRNmjv5S/w-1500-h-1500-fit-pad.webp',
    category: 'SmartHome',
    stock: 3
  },
  {
    id: '06',
    title: 'Redragon K686 Eisa PRO (K686WB-RGB-PRO)',
    description: 'Teclado gamer mecanico',
    price: 149999,
    image: 'https://i.postimg.cc/kGGfCvLg/2013403-picture-1737990830.png',
    category: 'Gaming',
    stock: 7
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
  })
}
