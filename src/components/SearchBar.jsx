import { useState } from "react"
import useStore from "../store"

function SearchBar() {
  const setSearchKeyword = useStore((state) => state.setSearchKeyword)

  const [searchInput, setSearchInput] = useState("")
  const [tag, setTag] = useState("")

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchKeyword(searchInput)
    setTag(searchInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button>Buscar</button>
      <span>{tag}</span>
    </form>
  )
}

export default SearchBar
