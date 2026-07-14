import Card from '@/components/Card'
import Button from '@/components/Button'
import Box from '@/components/Box/Box'

const Media = () => (
  <div
    style={{
      height: '14rem',
      background: 'linear-gradient(135deg, #007bff, #66b2ff)',
    }}
  />
)

const CardPage = () => {
  return (
    <div>
        <h2>Card</h2>
        <div className="sect">
          <h3>default</h3>
          <Box className="flex-center">
              <Card
                  media={<Media />}
                  title="기본 카드"
                  description="카드에 대한 짧은 설명이 들어갑니다."
                  footer={<Button size="sm">자세히 보기</Button>}
              />
          </Box>

          <h3>outline</h3>
          <Box className="flex-center">
              <Card
                  variant="outline"
                  title="아웃라인 카드"
                  description="테두리만 있고 그림자가 없는 카드입니다."
                  footer={
                      <Button size="sm" variant="outline">
                          자세히 보기
                      </Button>
                  }
              />
          </Box>

          <h3>elevated</h3>
          <Box className="flex-center">
              <Card
                  variant="elevated"
                  title="엘리베이티드 카드"
                  description="테두리 없이 그림자로 떠 있는 느낌을 주는 카드입니다."
                  footer={<Button size="sm">자세히 보기</Button>}
              />
          </Box>

          <h3>size</h3>
          <Box className="flex-center">
              <Card size="sm" title="Small" description="작은 내부 여백입니다." />
              <Card size="lg" title="Large" description="큰 내부 여백입니다." />
          </Box>
        </div>
    </div>
  )
}

export default CardPage
