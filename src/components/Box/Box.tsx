import { forwardRef } from 'react'
import type { BoxProps } from './Box.types'
import './Box.scss'

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box({ className, ...props }, ref) {
  const boxClasses = ['box', className || ''].join(' ').trim()

  return <div ref={ref} className={boxClasses} {...props} />
})

Box.displayName = 'Box'

export default Box
