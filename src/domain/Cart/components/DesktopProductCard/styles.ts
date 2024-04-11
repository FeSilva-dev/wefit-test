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