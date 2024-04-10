import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 24px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: white;
`

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
`

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  img {
    max-width: 90px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      font-weight: 700;
      font-size: 16px;
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`

export const Subtotal = styled.p`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
`

export const Separator = styled.hr`
  border-color: #999999;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
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
`