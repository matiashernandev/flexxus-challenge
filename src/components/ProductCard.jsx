export default function ProductCard({ product }) {
  return (
    <div className=" flex gap-[23px]">
      <img src={product.img} alt="Imagen de producto" />
      <div className="mt-8">
        <div className="text-[#343434]">{product.name}</div>
        <div className="text-sm text-[#757575] mt-1">{product.code}</div>
        <div className="mt-5 text-sm text-[#757575]">
          Precio:
          <span className="ml-2 font-medium text-base text-[#343434]">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  )
}
