import styled from "styled-components"

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

  gap: 12px;

  svg {
    width: 18px;
    color: #009EDD;
  }

  span {
    border: 1px solid #D9D9D9;
    padding: 4px 32px;
    border-radius: 4px;
  }
`

export const Subtotal = styled.p`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
`

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`