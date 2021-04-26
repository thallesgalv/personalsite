import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps {
  secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({children, secondary }) => {
  return <StyledButton secondary={secondary}>{children}</StyledButton>
}

export default Button
