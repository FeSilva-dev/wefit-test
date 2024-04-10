import { HTMLAttributes } from "react";
import * as S from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  uppercase?: boolean
  variant?: 'default' | 'success'
}

export function Button({
  children,
  uppercase = false,
  variant = 'default',
  ...rest
}: ButtonProps){
  return (
    <S.Button
      uppercase={uppercase}
      {...rest}
      variant={variant}
    >
      {children}
    </S.Button>
  )
}