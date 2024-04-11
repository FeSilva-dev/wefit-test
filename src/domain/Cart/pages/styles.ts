import styled from "styled-components";
import { Button } from "../../../components/Button";

export const CartWrapper = styled.div`
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: white;

  @media (max-width: 768px) {
    #cart-header {
      display: none;
    }
  }
`

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;

`

export const Separator = styled.hr`
  border-color: #999999;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    order: 0;
    display: flex;
    align-items: center;
    gap: 24px;
    text-transform: uppercase;
    font-weight: 700;

    & span:first-child {
      font-size: 14px;
      color: #999999;
    }

    & span:last-child {
      font-size: 24px;
      color: #2F2E41;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;

    button {
      order: 1;
      width: 100%;
    }

    div {
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;
    /* gap: 16px; */

    button {
      order: 1;
      width: 100%;
    }

    div {
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
  }
`

export const StyledFinishOrderButton = styled(Button)`
  padding: 14px 48px;
`