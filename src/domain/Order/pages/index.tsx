import * as S from './styles'
import SuccessOrder from '../../../assets/order-confirmation.svg'
import { useNavigate } from 'react-router-dom'

export function OrderConfirmation(){
  const navigate = useNavigate()
  return (
    <S.OrderSuccessWrapper>
      <h1>Compra realizada com sucesso!</h1>
      <img src={SuccessOrder} alt="" />
      <S.StyledSuccessButton onClick={() => navigate('/')}>
        Voltar
      </S.StyledSuccessButton>
    </S.OrderSuccessWrapper>
  )
}