import { HTMLAttributes } from "react";
import * as S from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  uppercase?: boolean
}

export function Button({
  children,
  uppercase = false,
  ...rest
}: ButtonProps){
  return (
    <S.Button uppercase={uppercase} {...rest}>
      {children}
    </S.Button>
  )
}