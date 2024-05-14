import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
