import { SearchInput } from '../components/Search'
import { useHome } from '../hooks/useHome'
import * as S from './styles'

export function Home(){
  const { data, isLoading } = useHome()

  return (
    <section>
      <SearchInput />

      <S.ListWrapper>
        {!isLoading && data && data?.map((item) => (
          <S.Card>
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>
              {item.price.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
              })}
            </p>
            <button>0 Adicionar ao carrinho</button>
          </S.Card>
        ))}
      </S.ListWrapper>
    </section>
  )
}