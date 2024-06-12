import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: 'Hover here',
    content: 'This is a cool tooltip',
    asChild: false,
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}

export const AsChild: StoryObj<TooltipProps> = {
  args: {
    trigger: <Button>Hover here</Button>,
    asChild: true,
  },
}
