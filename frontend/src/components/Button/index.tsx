import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'startIcon' | 'endIcon' | 'onClick' | 'sx' | 'disabled'
>

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string
}

function Button({ label, ...rest }: ButtonProps) {
  return <MuiButton {...rest}>{label}</MuiButton>
}

export { Button }

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary'
}
