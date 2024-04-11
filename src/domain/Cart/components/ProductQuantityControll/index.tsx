import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import * as S from './styles'
import { useCartStore } from '../../../../stores/cart'

interface ProductQuantityControllProps {
  id: number;
  quantity: number;
}

export function ProductQuantityControll({ id, quantity }: ProductQuantityControllProps){
  const { updateProductQuantity } = useCartStore()
  return (
    <S.Quantity>
      <button onClick={() => updateProductQuantity(id, quantity - 1)}>
        <MinusCircleIcon />
      </button>
      <span>{quantity}</span>
      <button onClick={() => updateProductQuantity(id, quantity + 1)}>
        <PlusCircleIcon />
      </button>
    </S.Quantity>
  )
}