import { ComponentProps } from 'react'

export type ControlInputProps = ComponentProps<'input'>

export function ControlInput(props: ControlInputProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
