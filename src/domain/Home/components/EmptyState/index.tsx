import * as S from './styles'
import Empty from '../../../../assets/emptyState.svg'

export function EmptyState(){
  return (
    <S.EmptyWrapper>
      <h1>Parece que não há nada por aqui {':('}</h1>
      <img src={Empty} alt="Nenhum produto encontrado" />
      <S.StyledEmptyButton onClick={() => window.location.reload()}>
        Recarregar página
      </S.StyledEmptyButton>
    </S.EmptyWrapper>
  )
}