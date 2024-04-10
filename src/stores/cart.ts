import { create } from 'zustand'
import { IMovie } from '../types'

export interface IProduct extends IMovie {
  quantity: number
}

interface ICartStore {
  products: IProduct[]
  addProductToCart: (product: IMovie) => void
  removeProductFromCart: (id: number) => void
  updateProductQuantity: (id: number, quantity: number) => void
}

export const useCartStore = create<ICartStore>(
  (set, get) => ({
    products: [],
    addProductToCart: (product: IMovie) => {
      const allProducts = get().products
      const productIndex = allProducts.findIndex(item => item.id === product.id)

      if (productIndex === -1) {
        return set(() => ({ products: [...get().products, {...product, quantity: 1} ] }))
      }

      const updatedProducts = [...allProducts]
      updatedProducts[productIndex].quantity += 1
      set({ products: updatedProducts })
    },
    removeProductFromCart: (id: number) => {
      const allProducts = get().products
      const remainingProducts = allProducts.filter(item => item.id !== id)

      set({ products: remainingProducts })
    },
    updateProductQuantity: (id: number, quantity: number) => {
      const allProducts = get().products
      let updatedProducts = []

      if (quantity === 0) {
        updatedProducts = allProducts.filter(
          (item) => item.id !== id
        )
      } else {
        updatedProducts = allProducts.map((item) => 
          item.id === id ? ({ ...item, quantity }) : item
        )
      }
      set({ products: updatedProducts })
    },
  }),
)
