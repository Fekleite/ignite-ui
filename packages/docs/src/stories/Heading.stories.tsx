import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default heading will be always `h2`, but this can be changed using `as`',
      },
    },
  },
}
