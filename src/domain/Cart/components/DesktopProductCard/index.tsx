import { MinusCircleIcon, PlusCircleIcon, Trash } from "lucide-react";
import * as S from './styles'
import { formatMoney } from "../../../../utils";
import { IProduct, useCartStore } from "../../../../stores/cart";
import { Fragment } from "react/jsx-runtime";

interface IDesktopProductCardProps {
  item: IProduct
}

export function DesktopProductCard({ item }: IDesktopProductCardProps) {
  const { removeProductFromCart, updateProductQuantity } = useCartStore()

  return (
    <Fragment>
      <S.Product>
        <img src={item.image} alt={item.title} />
        <div>
          <p>{item.title}</p>
          <p>{formatMoney(item.price)}</p>
        </div>
      </S.Product>
      <S.Quantity>
        <button onClick={() => updateProductQuantity(item.id, item.quantity - 1)}>
          <MinusCircleIcon />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateProductQuantity(item.id, item.quantity + 1)}>
          <PlusCircleIcon />
        </button>
      </S.Quantity>
      <S.Subtotal>
        {formatMoney(item.price * item.quantity)}
      </S.Subtotal>
      <S.Remove>
        <button onClick={() => removeProductFromCart(item.id)}>
          <Trash color='#009EDD' />
        </button>
      </S.Remove>
    </Fragment>
  )
}