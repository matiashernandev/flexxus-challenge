import "./App.css"
import ProductCard from "./components/ProductCard"
import ProductCounter from "./components/ProductCounter"
import SearchBar from "./components/SearchBar"
import useStore from "./store"

function App() {
  const { products, filteredProducts } = useStore()

  return (
    <div className="App">
      <SearchBar />
      <div className="">
        {(filteredProducts.length > 0 ? filteredProducts : products).map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )}

        <ProductCounter />
      </div>
    </div>
  )
}

export default App
