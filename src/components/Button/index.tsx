import { StyledButton } from './styles'

export interface ButtonProps {
  secondary?: boolean
  small?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, secondary, small }) => {
  return (
    <StyledButton secondary={secondary} small={small}>
      {children}
    </StyledButton>
  )
}

export default Button
