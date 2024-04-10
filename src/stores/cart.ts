import { create } from 'zustand'
import { IMovie } from '../types'

interface ICartStore {
  products: IMovie[]
}

export const useCartStore = create<ICartStore>(
  (set) => ({
    products: [],
    updateCart: (products: IMovie[]) => {
      set(() => ({ products: products }))
    },
  }),
)
