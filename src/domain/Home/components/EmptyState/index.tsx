import * as S from './styles'
import Empty from '../../../../assets/emptyState.svg'
import { Button } from '../../../../components/Button'

export function EmptyState(){
  return (
    <S.EmptyWrapper>
      <h1>Parece que não há nada por aqui {':('}</h1>
      <img src={Empty} alt="" />
      <Button onClick={() => window.location.reload()}>
        Recarregar página
      </Button>
    </S.EmptyWrapper>
  )
}