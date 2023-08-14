import useStore from "../store"

export default function ProductCounter() {
  const { products, filteredProducts } = useStore()

  return (
    <div className="text-start mt-3 w-5/6 text-[#757575]  ">
      {filteredProducts?.length || products?.length} resultados
    </div>
  )
}
