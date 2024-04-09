import { ShoppingBasket } from 'lucide-react'
import * as S from './styles'

export function Header(){
  return (
    <S.Header>
      <button>
        <S.Logo>WeMovies</S.Logo>
      </button>

      <S.CartWrapper>
        <S.CartInfo>
          <p>Meu Carrinho</p>
          <p>0 itens</p>
        </S.CartInfo>

        <ShoppingBasket color="white" size={35} />
      </S.CartWrapper>
    </S.Header>
  )
}