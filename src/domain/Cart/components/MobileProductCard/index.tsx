import { IProduct } from '../../../../stores/cart'
import * as S from './styles'
import { formatMoney } from '../../../../utils'
import { ProductQuantityControll } from '../ProductQuantityControll'

interface IMobileProductCardProps {
  item: IProduct
}

export function MobileProductCard({ item }: IMobileProductCardProps){
  return (
    <S.MobileProductCartWrapper>
      <img src={item.image} alt={item.title} />

      <S.CardContent>
        <S.MainInfo>
          <p>{item.title}</p>
          <p>{formatMoney(item.price)}</p>
        </S.MainInfo>

        <S.PriceWrapper>
          <ProductQuantityControll id={item.id} quantity={item.quantity} />

          <S.PriceInfo>
            <p>Subtotal</p>
            <p>{formatMoney(item.quantity * item.price)}</p>
          </S.PriceInfo>
        </S.PriceWrapper>
      </S.CardContent>

    </S.MobileProductCartWrapper>
  )
}