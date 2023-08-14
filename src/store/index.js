import { create } from "zustand"
import { products } from "../mock/products"

const useStore = create((set) => ({
  searchKeyword: "",
  products,
  filteredProducts: [],
  setSearchKeyword: (keyword) =>
    set((state) => ({
      searchKeyword: keyword,
      filteredProducts: state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(keyword.toLowerCase()) ||
          product.code.toLowerCase().includes(keyword.toLowerCase())
      ),
    })),
}))

export default useStore
