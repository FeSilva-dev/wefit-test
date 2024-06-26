import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const ListWrapper = styled.div`
  margin: 24px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media(max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;

  img {
    max-width: 147px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`

export const AddToCartIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > svg {
    width: 14px;
  }
`