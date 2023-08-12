import { create } from "zustand"

const products = [
  {
    id: 1,
    name: "HEADSET GAMER HAVIT HV-H2232 D",
    code: "CODE143706",
    price: 3000,
    img: "src/assets/img/headset01.png",
  },
  {
    id: 3,
    name: "HEADSET GAMER NOGA STORMER",
    code: "CODE185756",
    price: 2550,
    img: "src/assets/img/headset02.png",
  },
  {
    id: 2,
    name: "HEADSET GAMER CONSTRICTOR",
    code: "CODE143456",
    price: 2700,
    img: "src/assets/img/headset03.png",
  },
  {
    id: 4,
    name: "MOUSE GAMER STORMER",
    code: "CODE895432",
    price: 1500,
    img: "src/assets/img/mouse01.png",
  },
]

const useStore = create((set) => ({
  searchKeyword: "",
  products,
  filteredProducts: [],
  setSearchKeyword: (keyword) =>
    set((state) => ({
      searchKeyword: keyword,
      filteredProducts: state.products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    })),
}))

export default useStore
