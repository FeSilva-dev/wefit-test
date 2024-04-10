import styled from "styled-components";

interface IStyledButtonProps {
  uppercase?: boolean
}

export const Button = styled.button<IStyledButtonProps>`
  border-radius: 4px;
  padding: 14px 48px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  color: white;
  background-color: #009EDD;

  text-transform: ${(props) => props.uppercase && 'uppercase'};

  &:hover {
    filter: brightness(0.9);
  }
`