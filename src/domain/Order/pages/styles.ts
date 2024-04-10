import styled from "styled-components";
import { Button } from "../../../components/Button";

export const OrderSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 32px;
  margin-top: 24px;
  background-color: white;
  padding: 64px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;
    text-align: center;
    line-height: 27px;
  }
`

export const StyledSuccessButton = styled(Button)`
  padding: 12px 48px;
`