import type { IconProps } from './Icon.types'

const Icon = ({ text, className }: IconProps) => {
  return (
    <i className={`icon ${className}`}>{text}</i>
  )
}

export default Icon