import { Trash } from 'lucide-react'
import * as S from './styles'
import { Button } from '../../../components/Button'

export function Cart(){
  return (
    <S.CartWrapper>
      <S.CartGrid>
        <span>Produto</span>
        <span>QTD</span>
        <span>Subtotal</span>
        <span></span>
      </S.CartGrid>

      <S.CartGrid>
        <S.Product>
          <img src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png" alt="" />
          <div>
            <p>Homem aranha</p>
            <p>R$ 29,99</p>
          </div>
        </S.Product>
        <S.Quantity>
          <p> - 1 + </p>
        </S.Quantity>
        <S.Subtotal>
          R$ 29.99
        </S.Subtotal>
        <S.Remove>
          <Trash color='#009EDD' />
        </S.Remove>
      </S.CartGrid>

      <S.Separator />

      <S.Footer>
        <Button uppercase>
          Finalizar pedido
        </Button>

        <div>
          <span>Total</span>
          <span>R$ 29,90</span>
        </div>
      </S.Footer>
    </S.CartWrapper>
  )
}