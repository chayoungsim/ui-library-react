import { useEffect, useRef, useState } from 'react'
import { Box, Button, Checkbox, Input, Radio, Select, Switch } from '@/index'
import type { ButtonProps } from '@/index'
import { colord } from 'colord'

interface ColorItem {
  varName: string
  label: string
  description?: string
}

interface ColorSwatchProps {
  item: ColorItem
}

const ColorSwatch = ({ item }: ColorSwatchProps) => {
  const { varName, label, description } = item
  const [hex, setHex] = useState('')
  const colorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (colorRef.current) {
      const computedColor = getComputedStyle(colorRef.current).getPropertyValue(varName).trim()
      if (computedColor) {
        setHex(colord(computedColor).toHex())
      }
    }
  }, [varName])

  return (
    <div className="color-card">
      <div ref={colorRef} className="color-card-swatch" style={{ backgroundColor: `var(${varName})` }} />
      <div className="color-card-body">
        <span className="color-card-name">{label}</span>
        <span className="color-card-hex">
          {varName} · {hex}
        </span>
        {description && <span className="color-card-desc">{description}</span>}
      </div>
    </div>
  )
}

const themeColors: ColorItem[] = [
  { varName: '--color-primary', label: 'Primary', description: '브랜드 기본 컬러' },
  { varName: '--color-primary-hover', label: 'Primary Hover', description: 'primary 호버 상태' },
  { varName: '--color-background', label: 'Background', description: '페이지 배경' },
  { varName: '--color-text', label: 'Text', description: '기본 텍스트' },
  { varName: '--color-link', label: 'Link', description: '링크 텍스트' },
  { varName: '--color-border', label: 'Border', description: '테두리' },
  { varName: '--color-error', label: 'Error', description: '에러 상태' },
]

const grayScaleColors: ColorItem[] = Array.from({ length: 9 }, (_, i) => {
  const step = (i + 1) * 100
  return { varName: `--color-gray-${step}`, label: `Gray ${step}` }
})

const baseColors: ColorItem[] = [
  { varName: '--color-white', label: 'White' },
  { varName: '--color-black', label: 'Black' },
]

interface TypographyItem {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  className?: string
  sample: string
  meta: string
}

const typographyScale: TypographyItem[] = [
  { Tag: 'h1', sample: 'Display Heading', meta: 'H1 — 4.2rem(42px) / 700 / line-height 1.2 / --font-size-h1' },
  { Tag: 'h2', sample: 'Section Heading', meta: 'H2 — 3.2rem(32px) / 700 / line-height 1.2 / --font-size-h2' },
  { Tag: 'h3', sample: 'Tile Heading', meta: 'H3 — 2.8rem(28px) / 700 / line-height 1.2 / --font-size-h3' },
  { Tag: 'h4', sample: 'Card Title', meta: 'H4 — 2.2rem(22px) / 700 / line-height 1.2 / --font-size-h4' },
  { Tag: 'p', sample: 'Body 텍스트, 기본 본문 스타일입니다.', meta: 'Body — 1.6rem(16px) / 400 / line-height 1.5 / --font-size-base' },
  {
    Tag: 'p',
    className: 'typo-emphasis',
    sample: 'Body Emphasis, 강조가 필요한 본문입니다.',
    meta: 'Body Emphasis — 1.6rem(16px) / 700 / line-height 1.5 / --font-weight-bold',
  },
]

const buttonVariants: { variant: NonNullable<ButtonProps['variant']>; label: string }[] = [
  { variant: 'primary', label: 'Primary' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'outline', label: 'Outline' },
  { variant: 'text', label: 'Text' },
]

const Home = () => {
  return (
    <div>
      <h2>Design System Preview</h2>
      <div className="sect color-section">
        <h3>01 / Color Palette</h3>   
             
        <div className="color-group">
          <h4>Theme Colors</h4>
          <div className="color-grid">
            {themeColors.map((color) => (
              <ColorSwatch key={color.varName} item={color} />
            ))}
          </div>
        </div>
        <div className="color-group">
          <h4>Grayscale</h4>
          <div className="color-grid">
            {grayScaleColors.map((color) => (
              <ColorSwatch key={color.varName} item={color} />
            ))}
          </div>
        </div>
        <div className="color-group">
          <h4>Base</h4>
          <div className="color-grid">
            {baseColors.map((color) => (
              <ColorSwatch key={color.varName} item={color} />
            ))}
          </div>
        </div>
      </div>
      <div className="sect">
        <h3>02 / Typography Scale</h3>
        <Box>
          <div className="typo-scale">
            {typographyScale.map(({ Tag, className, sample, meta }, index) => (
              <div className="typo-row" key={index}>
                <Tag className={className}>{sample}</Tag>
                <span className="typo-meta">{meta}</span>
              </div>
            ))}
          </div>
        </Box>
      </div>
      <div className="sect">
        <h3>03 / Buttons</h3>
        <Box>
          <div className="button-preview-group">
            {buttonVariants.map(({ variant, label }) => (
              <div className="button-preview-item" key={variant}>
                <Button variant={variant} size="md">
                  {label}
                </Button>
                <span className="button-preview-label">variant=&quot;{variant}&quot;</span>
              </div>
            ))}
          </div>
        </Box>
      </div>
      <div className="sect">
        <h3>04 / Form Elements</h3>
        <Box>
          <div className="form-preview">
            <div className="login-card">
              <h4>로그인</h4>
              <div className="form-field">
                <label htmlFor="preview-email">이메일</label>
                <Input id="preview-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="form-field">
                <label htmlFor="preview-password">비밀번호</label>
                <Input id="preview-password" type="password" placeholder="••••••••" />
              </div>
              <div className="form-field">
                <label htmlFor="preview-lang">언어</label>
                <Select id="preview-lang" placeholder="언어 선택">
                  <option value="ko">한국어</option>
                  <option value="en">English</option>
                </Select>
              </div>
              <div className="form-field">
                <span className="form-field-legend">계정 유형</span>
                <div className="form-field-inline">
                  <Radio name="preview-account-type" label="개인" defaultChecked />
                  <Radio name="preview-account-type" label="기업" />
                </div>
              </div>
              <div className="form-field-row">
                <Checkbox label="로그인 상태 유지" defaultChecked />
                <Switch label="2단계 인증" />
              </div>
              <Button variant="primary" size="lg" className="form-submit">
                로그인
              </Button>
            </div>
          </div>
        </Box>
      </div>
      <div className="sect">
        <h3>05 / Layout</h3>
        <Box></Box>
      </div>
    </div>
  )
}

export default Home
