import useStore from "../store"
import ProductCard from "./ProductCard"

export default function ProductList() {
  const { products, filteredProducts } = useStore()
  return (
    <section className="w-5/6  grid grid-cols-1  md:grid-cols-2  gap-10 pb-10 border-b ">
      {(filteredProducts.length > 0 ? filteredProducts : products).map(
        (product) => (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </section>
  )
}
