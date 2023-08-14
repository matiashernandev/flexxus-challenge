import ProductCounter from "./components/ProductCounter"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"

export default function App() {
  return (
    <div className="max-w-7xl px-4 mx-auto flex flex-col items-center mt-[64px] ">
      <SearchBar />
      <ProductList />
      <ProductCounter />
    </div>
  )
}
