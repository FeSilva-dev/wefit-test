import { ShoppingCart } from 'lucide-react'
import { Button } from '../../../components/Button'
import { Loading } from '../../../components/Loading'
import { useCartStore } from '../../../stores/cart'
import { formatMoney } from '../../../utils'
import { EmptyState } from '../components/EmptyState'
import { SearchInput } from '../components/Search'
import { useHome } from '../hooks/useHome'
import * as S from './styles'

export function Home(){
  const { data, isLoading } = useHome()
  const { products, addProductToCart } = useCartStore()

  if (isLoading){
    return (
      <S.LoadingWrapper>
        <Loading />
      </S.LoadingWrapper>
    )
  }

  return (
    <section>
      <SearchInput />

      {!isLoading && !data?.length && (
        <EmptyState />
      )}

      <S.ListWrapper>
        {!isLoading && data && data?.map((item) => {
          const alreadyAddedToCart = products.find(product => product.id === item.id)
          const quantityInCart = alreadyAddedToCart?.quantity ?? 0

          return (
            <S.Card key={item.id}>
              <img src={item?.image} alt={item?.title} />
              <h1>{item?.title}</h1>
              <p>
                {formatMoney(item?.price)}
              </p>
              <Button
                uppercase
                onClick={() => addProductToCart(item)}
                variant={quantityInCart > 0 ? 'success' : 'default'}
              >
                <S.AddToCartIcon>
                  <ShoppingCart />
                  {quantityInCart}
                </S.AddToCartIcon>
                Adicionar ao carrinho
              </Button>
            </S.Card>
          )
        })}
      </S.ListWrapper>
    </section>
  )
}