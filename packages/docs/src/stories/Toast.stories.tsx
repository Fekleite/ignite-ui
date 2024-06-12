import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'New notification',
    description: 'There is a new notification for you!',
    open: true,
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
