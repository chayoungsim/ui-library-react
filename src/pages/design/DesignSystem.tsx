import { useEffect, useRef, useState } from 'react'
import { Box, Button, Checkbox, Input, Radio, Select, Switch } from '@/index'
import type { ButtonProps } from '@/index'
import { colord } from 'colord'
import usePageTitle from '@/hooks/usePageTitle'
import './DesignSystem.scss'

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
  { varName: '--color-sk-red', label: 'SK Red Brand', description: 'SK Red' },  
  { varName: '--color-sk-blue', label: 'SK Blue Brand', description: 'SK Blue' },  
  { varName: '--color-sk-teal', label: 'SK Teal Brand', description: 'SK Teal' },  
  { varName: '--color-sk-navy', label: 'SK Navy Brand', description: 'SK Navy' },  
  { varName: '--color-primary', label: 'Primary', description: '브랜드 기본 컬러' },
  { varName: '--color-primary-hover', label: 'Primary Hover', description: 'primary 호버 상태' },
  { varName: '--color-background', label: 'Background', description: '페이지 배경' },
  { varName: '--color-text', label: 'Text', description: '기본 텍스트' },
  { varName: '--color-text-mute', label: 'Sub Text', description: '서브 텍스트' },
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
  Tag: 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  className?: string
  sample: string
  meta: string
}

const typographyScale: TypographyItem[] = [
  { Tag: 'h2', sample: 'Display Heading', meta: 'H2 — 4.2rem(56px) / 700 / line-height 1.2 / --font-size-h1' },
  { Tag: 'h3', sample: 'Section Heading', meta: 'H3 — 3.2rem(36px) / 700 / line-height 1.2 / --font-size-h2' },
  { Tag: 'h4', sample: 'Tile Heading', meta: 'H4 — 2.8rem(28px) / 700 / line-height 1.2 / --font-size-h3' },
  { Tag: 'h5', sample: 'Card Title', meta: 'H5 — 2.2rem(22px) / 700 / line-height 1.2 / --font-size-h4' },
  { Tag: 'p', sample: 'Body 텍스트, 기본 본문 스타일입니다.', meta: 'Body — 1.8rem(18px) / 400 / line-height 1.5 / --font-size-base' },
  {
    Tag: 'p',
    className: 'typo-emphasis',
    sample: 'Body Emphasis, 강조가 필요한 본문입니다.',
    meta: 'Body Emphasis — 1.8rem(18px) / 700 / line-height 1.5 / --font-weight-bold',
  },
]

const buttonVariants: { variant: NonNullable<ButtonProps['variant']>; label: string }[] = [
  { variant: 'primary', label: 'Primary' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'outline', label: 'Outline' },  
  { variant: 'textLine', label: 'TextLine' },
  { variant: 'text', label: 'Text' },
]

const DesignSystem = () => {
  usePageTitle('Home - ui-library')

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
        <h3>05 / Spacing Scale</h3>
        <Box>
        <div className="spacing-row">
            <div className="spacing-item"><div className="spacing-block" style={{width:"4px"}}></div><div className="spacing-value">4<span className="typo-meta"> --spacing-1</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"8px"}}></div><div className="spacing-value">8<span className="typo-meta"> --spacing-2</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"12px"}}></div><div className="spacing-value">12<span className="typo-meta"> --spacing-3</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"16px"}}></div><div className="spacing-value">16<span className="typo-meta"> --spacing-4</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"24px"}}></div><div className="spacing-value">24<span className="typo-meta"> --spacing-5</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"32px"}}></div><div className="spacing-value">32<span className="typo-meta"> --spacing-6</span></div></div>
            <div className="spacing-item"><div className="spacing-block" style={{width:"48px"}}></div><div className="spacing-value">48<span className="typo-meta"> --spacing-7</span></div></div>
        </div>
        </Box>
      </div>
      <div className="sect">
        <h3>06 / Border Radius Scale</h3>
        <Box>
        <div className="radius-row">
          <div className="radius-item"><div className="radius-box" style={{borderRadius:"8px"}}></div><div className="radius-label">8px</div><div className="radius-context">Buttons<span className="typo-meta">--radius-sm</span></div></div>
          <div className="radius-item"><div className="radius-box" style={{borderRadius:"14px"}}></div><div className="radius-label">14px</div><div className="radius-context">Badges<span className="typo-meta">--radius-md</span></div></div>
          <div className="radius-item"><div className="radius-box" style={{borderRadius:"20px"}}></div><div className="radius-label">20px</div><div className="radius-context">Cards<span className="typo-meta">--radius-lg</span></div></div>
          <div className="radius-item"><div className="radius-box" style={{borderRadius:"32px"}}></div><div className="radius-label">32px</div><div className="radius-context">Large<span className="typo-meta">--radius-xl</span></div></div>
          <div className="radius-item"><div className="radius-box" style={{borderRadius:"50%",width:"56px",height:"56px"}}></div>
          <div className="radius-label">50%</div><div className="radius-context">Controls<span className="typo-meta">--radius-circle</span></div></div>
        </div>
        </Box>
      </div>
      <div className="sect">
        <h3>07 / Elevation & Depth</h3>
        <Box>
          <div className="elevation-grid">
            <div className="elevation-card" style={{ border: "1px solid #ebebeb" }}><div className="elevation-label">Flat</div><div className="elevation-desc">No shadow</div></div>
            <div className="elevation-card" style={{ boxShadow: "var(--shadow-card)" }}><div className="elevation-label">Card</div><div className="elevation-desc">Three-layer warm</div></div>
            <div className="elevation-card" style={{ boxShadow: "var(--shadow-hover)" }}><div className="elevation-label">Hover</div><div className="elevation-desc">Interactive lift</div></div>
            <div className="elevation-card" style={{ boxShadow: "0 0 0 2px var(--near-black)" }}><div className="elevation-label">Focus</div><div className="elevation-desc">Dark focus ring</div></div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default DesignSystem
