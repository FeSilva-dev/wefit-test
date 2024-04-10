import styled from "styled-components";

export const EmptyWrapper = styled.div`
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

  button {
    border-radius: 4px;
    padding: 14px 48px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    color: white;
    background-color: #009EDD;
  }
`