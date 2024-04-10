import { Trash } from "lucide-react";
import * as S from './styles'
import { formatMoney } from "../../../../utils";
import { IProduct, useCartStore } from "../../../../stores/cart";

interface IDesktopProductCardProps {
  item: IProduct
}

export function DesktopProductCard({ item }: IDesktopProductCardProps) {
  const { removeProductFromCart } = useCartStore()
  return (
    <>
      <S.Product>
        <img src={item.image} alt={item.title} />
        <div>
          <p>{item.title}</p>
          <p>{formatMoney(item.price)}</p>
        </div>
      </S.Product>
      <S.Quantity>
        <p> - {item.quantity} + </p>
      </S.Quantity>
      <S.Subtotal>
        {formatMoney(item.price * item.quantity)}
      </S.Subtotal>
      <S.Remove>
        <button onClick={() => removeProductFromCart(item.id)}>
          <Trash color='#009EDD' />
        </button>
      </S.Remove>
    </>
  )
}