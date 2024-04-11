import { Trash } from "lucide-react";
import * as S from './styles'
import { formatMoney } from "../../../../utils";
import { IProduct, useCartStore } from "../../../../stores/cart";
import { Fragment } from "react/jsx-runtime";
import { ProductQuantityControll } from "../ProductQuantityControll";

interface IDesktopProductCardProps {
  item: IProduct
}

export function DesktopProductCard({ item }: IDesktopProductCardProps) {
  const { removeProductFromCart } = useCartStore()

  return (
    <Fragment>
      <S.Product>
        <img src={item.image} alt={item.title} />
        <div>
          <p>{item.title}</p>
          <p>{formatMoney(item.price)}</p>
        </div>
      </S.Product>
      <ProductQuantityControll id={item.id} quantity={item.quantity} />
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