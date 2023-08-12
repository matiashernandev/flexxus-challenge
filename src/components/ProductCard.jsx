/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="">{product.name}</div>
      <img src={product.img} alt="" />
    </div>
  )
}

export default ProductCard
