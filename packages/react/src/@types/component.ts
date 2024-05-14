import { ComponentProps as StitchesComponentProps } from '@stitches/react'
import { ElementType } from 'react'

export type ComponentProps<T> = StitchesComponentProps<T> & {
  as?: ElementType
}
