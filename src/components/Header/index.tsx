import { ShoppingBasket } from 'lucide-react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export function Header(){
  const navigate = useNavigate()
  return (
    <S.Header>
      <button onClick={() => navigate('/')}>
        <S.Logo>WeMovies</S.Logo>
      </button>

      <S.CartWrapper onClick={() => navigate('/cart')}>
        <S.CartInfo>
          <p>Meu Carrinho</p>
          <p>0 itens</p>
        </S.CartInfo>

        <ShoppingBasket color="white" size={35} />
      </S.CartWrapper>
    </S.Header>
  )
}