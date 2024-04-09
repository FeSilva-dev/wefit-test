import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: white;
  line-height: 27px;
`

export const CartWrapper = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 14px;
`

export const CartInfo = styled.div`
  p {
    color: white;
    font-weight: 600;
  }

  & > p:first-child {
    font-size: 14px;
    line-height: 19px;
  }

  & > p:last-child {
    font-size: 12px;
    line-height: 16px;
    color: #999999;
    text-align: right;
  }
`