import { useState } from 'react'
import Hamburger from '@/components/Hamburger'
import Box from '@/components/Box'
import type { HamburgerProps } from '@/components/Hamburger'

interface HamburgerDemoProps {
  variant: NonNullable<HamburgerProps['variant']>
  size?: HamburgerProps['size']
  label: string
}

const HamburgerDemo = ({ variant, size, label }: HamburgerDemoProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="button-preview-item">
      <Hamburger variant={variant} size={size} isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      <span className="button-preview-label">{label}</span>
    </div>
  )
}

const variants: { variant: NonNullable<HamburgerProps['variant']>; label: string }[] = [
  { variant: 'spin', label: 'variant="spin"' },
  { variant: 'squeeze', label: 'variant="squeeze"' },
  { variant: 'arrow', label: 'variant="arrow"' },
  { variant: 'slider', label: 'variant="slider"' },
]

const HamburgerPage = () => {
  return (
    <div>
      <h2>Hamburger</h2>
      <div className="sect">
        <h3>variant</h3>
        <Box className="flex-center">
          {variants.map(({ variant, label }) => (
            <HamburgerDemo key={variant} variant={variant} label={label} />
          ))}
        </Box>

        <h3>size</h3>
        <Box className="flex-center">
          <HamburgerDemo variant="spin" size="sm" label='size="sm"' />
          <HamburgerDemo variant="spin" size="md" label='size="md"' />
          <HamburgerDemo variant="spin" size="lg" label='size="lg"' />
        </Box>
      </div>
    </div>
  )
}

export default HamburgerPage
