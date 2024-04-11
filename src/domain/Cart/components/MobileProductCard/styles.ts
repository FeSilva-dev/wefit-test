import styled from "styled-components";

export const MobileProductCartWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 16px;

  img {
    max-width: 80px;
  }

  @media(max-width: 368px){
    flex-direction: column;
    align-items: center;

    gap: 12px;

    img {
      max-width: 64px;
    }
  }
`

export const CardContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 16px;
  }

  @media(max-width: 368px){
    flex-direction: column;
    gap: 4px;
    align-items: center;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 368px){
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`

export const PriceInfo = styled.div`
  p {
    font-weight: 700;
    text-align: right;
  }

  & > p:first-child {
    color: #999999;
    text-transform: uppercase;
    font-size: 12px;
  }

  & > p:last-child {
    font-size: 16px;
  }

  @media(max-width: 368px){
    p {
      text-align: center;
    }
  }
`