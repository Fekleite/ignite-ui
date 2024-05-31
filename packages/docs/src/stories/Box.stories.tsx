import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Lorem ipsum</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
