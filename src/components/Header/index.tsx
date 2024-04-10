import { ShoppingBasket } from 'lucide-react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../../stores/cart'

export function Header(){
  const navigate = useNavigate()
  const { products } = useCartStore()

  return (
    <S.Header>
      <button onClick={() => navigate('/')}>
        <S.Logo>WeMovies</S.Logo>
      </button>

      <S.CartWrapper onClick={() => navigate('/cart')}>
        <S.CartInfo>
          <p>Meu Carrinho</p>
          <p>
            {products.length} {' '}
            {products.length === 1 ? 'item' : 'itens'}
          </p>
        </S.CartInfo>

        <ShoppingBasket color="white" size={35} />
      </S.CartWrapper>
    </S.Header>
  )
}