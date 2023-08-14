import searchIcon from "/assets/icon/search.svg"
import closeIcon from "/assets/icon/close.svg"
import useSearch from "../hooks/useSearch"
import { Toaster } from "sonner"

export default function SearchBar() {
  const {
    searchInput,
    tag,
    isLabelVisible,
    handleSearchInputChange,
    handleSearchSubmit,
    clearLabel,
  } = useSearch()

  return (
    <form className="w-5/6" onSubmit={handleSearchSubmit}>
      <Toaster duration={3000} position="top-center" />
      <div className="flex h-[56px] rounded-lg">
        <input
          className="flex-1 border border-[#d9d9d9] border-r-0 opacity-[0.85] outline-none rounded-l-lg px-3  "
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button className="flex items-center px-4 gap-1 rounded-r-lg text-white bg-[#343434] hover:bg-[#1890FF] transition-colors">
          <img className="m-1" src={searchIcon} alt="Ìcono de lupa" />
          <span className="hidden lg:flex">Buscar</span>
        </button>
      </div>
      <div
        className={`${
          !isLabelVisible && "invisible"
        } h-6 px-2 py-px mt-6 mb-10  bg-[#343434] rounded-lg border border-zinc-300 justify-start items-center gap-[3px] inline-flex`}
      >
        <div className="text-white text-sm font-normal leading-tight">
          {tag}
        </div>
        <img
          className="cursor-pointer"
          src={closeIcon}
          alt="Ícono cruz cerrar"
          onClick={clearLabel}
        />
      </div>
    </form>
  )
}
