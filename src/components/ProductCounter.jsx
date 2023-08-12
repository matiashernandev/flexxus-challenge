import useStore from "../store"

function ProductCounter() {
  const { products, filteredProducts } = useStore()

  return <div>{filteredProducts?.length || products?.length} resultados</div>
}

export default ProductCounter
