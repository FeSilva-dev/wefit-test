import * as S from './styles'
import { formatMoney } from '../../../utils'
import { EmptyState } from '../../Home/components/EmptyState'
import useWindowSize from '../../../hooks/useWindowSize'
import { Fragment } from 'react/jsx-runtime'
import { DesktopProductCard } from '../components/DesktopProductCard'
import { useCart } from '../hooks/useCart'

export function Cart(){
  const { products, totalValue, handleFinishOrder } = useCart()
  const { width } = useWindowSize()
  const isMobile = width <= 768

  if (products.length === 0) {
    return <EmptyState />
  }

  return (
    <S.CartWrapper>
      <S.CartGrid id="cart-header">
        <span>Produto</span>
        <span>QTD</span>
        <span>Subtotal</span>
        <span></span>
      </S.CartGrid>

      {products.map((item) => (
        <Fragment key={item.id}>
          {!isMobile ? (
            <S.CartGrid>
              <DesktopProductCard item={item} />
            </S.CartGrid>
          ) : (
            <h1>oi</h1>
          )}
        </Fragment>
      ))}

      <S.Separator />

      <S.Footer>
        <S.StyledFinishOrderButton uppercase onClick={handleFinishOrder}>
          Finalizar pedido
        </S.StyledFinishOrderButton>

        <div>
          <span>Total</span>
          <span>{formatMoney(totalValue)}</span>
        </div>
      </S.Footer>
    </S.CartWrapper>
  )
}