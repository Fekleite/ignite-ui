import { Provider, Viewport } from '@radix-ui/react-toast'
import { ToastRoot, ToastTitle, ToastDescription, ToastClose } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  open: boolean
}

export function Toast({ title, description, open }: ToastProps) {
  return (
    <Provider>
      <ToastRoot open={open}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>

        <ToastClose>
          <X color="#A9A9B2" size={20} />
        </ToastClose>
      </ToastRoot>

      <Viewport />
    </Provider>
  )
}

Toast.displayName = 'Toast'
