import { useNavigate } from "react-router-dom"
import { useCartStore } from "../../../stores/cart"

export function useCart(){
  const navigate = useNavigate()
  const { products, clear } = useCartStore()

  const totalValue = products.reduce(
    (acc, current) => acc += current.price * current.quantity, 0
  )

  function handleFinishOrder(){
    clear()
    navigate('/order-confirmation')
  }

  return {
    products,
    totalValue,
    handleFinishOrder,
  }
}