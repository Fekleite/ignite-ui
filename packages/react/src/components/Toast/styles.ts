import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  padding: '$3 $5',
  borderRadius: 6,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$gray600',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 4,

  width: 'fit-content',
  minWidth: 360,
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',

  marginBottom: 4,
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  cursor: 'pointer',
})
