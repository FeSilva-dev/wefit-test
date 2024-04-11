import styled from "styled-components";

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

  @media(max-width: 368px) {
    width: 100%;

    span {
      width: 100%;
      text-align: center;
    }
  }
`
