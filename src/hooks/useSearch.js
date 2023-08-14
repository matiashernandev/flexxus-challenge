import { useState } from "react"
import { toast } from "sonner"
import useStore from "../store"

export default function useSearch() {
  const setSearchKeyword = useStore((state) => state.setSearchKeyword)
  const [searchInput, setSearchInput] = useState("")
  const [tag, setTag] = useState("")
  const [isLabelVisible, setIsLabelVisible] = useState(false)

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    toast("Buscando...")

    setTimeout(() => {
      setSearchKeyword(searchInput)
      if (searchInput) {
        setTag(searchInput)
        setIsLabelVisible(true)
      }
    }, 3000)
  }

  const clearLabel = () => {
    setSearchInput("")
    setIsLabelVisible(false)
    setSearchKeyword("")
  }

  return {
    searchInput,
    tag,
    isLabelVisible,
    handleSearchInputChange,
    handleSearchSubmit,
    clearLabel,
  }
}
