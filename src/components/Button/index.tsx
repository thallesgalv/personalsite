import { StyledButton } from './styles'

export interface ButtonProps {
  secondary?: boolean
  small?: boolean
  link?: string
}

const Button: React.FC<ButtonProps> = ({ children, secondary, small, link }) => {
  return (
    <StyledButton secondary={secondary} small={small}>
      <a href={link} target="_blank" rel="noopener">
      {children}
      </a>
    </StyledButton>
  )
}

export default Button
