import styled from "styled-components";

const BACKGROUND_COLOR = {
  default: '#009EDD',
  success: '#039B00',
}

interface IStyledButtonProps {
  uppercase?: boolean
  variant: 'default' | 'success'
}

export const Button = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 4px;
  padding: 9px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  color: white;
  background-color: ${props => BACKGROUND_COLOR[props.variant]};

  text-transform: ${(props) => props.uppercase && 'uppercase'};

  &:hover {
    filter: brightness(0.9);
  }
`