import useTheme from '@/hooks/useTheme'
import Button from '@/components/Button'
import Box from '@/components/Box'

const Theme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h2>Theme</h2>
      <div className="sect">
        <h3>라이트 / 다크 모드</h3>
        <Box className="flex-center">
          <Button variant="outline" onClick={toggleTheme}>
            {theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default Theme
