import styled from "styled-components";

export const InputWrapper = styled.form`
  position: relative;

  & svg {
    color: #CCCCCC;
    width: 18px;

    position: absolute;
    top: 14px;
    right: 15px;

  }
`

export const Input = styled.input`
  padding: 16px 48px 16px 16px;
  border-radius: 8px;
  width: 100%;
  border: none;
  outline: none;
  border: 2px solid white;

  &:focus-visible {
    border: 2px solid #009EDD;
  }
`