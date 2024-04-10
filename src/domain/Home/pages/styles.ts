import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #009EDD;
    gap: 12px;
    border-radius: 4px;
    padding: 9px;
    color: white;
    font-weight: 700;

    &:hover {
      filter: brightness(0.9);
    }
  }
`