import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: 5,

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  color: '$white',
})
