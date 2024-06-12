import { ReactNode } from 'react'
import { TooltipContent, TooltipTrigger } from './styles'
import { Provider, Root, Portal, Arrow } from '@radix-ui/react-tooltip'
import { Text } from '../Text'

export interface TooltipProps {
  trigger: ReactNode
  content: string
  asChild?: boolean
}

export function Tooltip({ trigger, content, asChild = false }: TooltipProps) {
  return (
    <Provider>
      <Root>
        <TooltipTrigger asChild={asChild}>
          {asChild ? trigger : <Text>{trigger}</Text>}
        </TooltipTrigger>
        <Portal>
          <TooltipContent>
            {content}
            <Arrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}

Tooltip.displayName = 'Tooltip'
