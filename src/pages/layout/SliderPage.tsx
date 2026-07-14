import SliderBasic from '@/components/Slider'
import MediaSwiper from '@/components/MediaSwiper'
import CardSwiper from '@/components/CardSwiper'
import Box from '@/components/Box'

const Media = ({ seed }: { seed: number }) => (
  <div
    style={{
      height: '14rem',
      background: `linear-gradient(135deg, hsl(${seed * 36}, 70%, 55%), hsl(${seed * 36 + 40}, 70%, 70%))`,
    }}
  />
)

const cardItems = Array.from({ length: 10 }, (_, i) => ({
  media: <Media seed={i} />,
  title: `Card ${i + 1}`,
  description: `${i + 1}번째 카드 아이템입니다.`,
}))

const SliderPage = () => {
  return (
    <div>
      <h2>Slider</h2>
      <div className="sect">
        <h3>Basic</h3>
        <Box>
          <SliderBasic
            slides={[
              {
                image: 'https://picsum.photos/seed/slide1/1200/600',
                title: 'Slide 1',
                description: '배경 이미지와 텍스트가 조합된 기본 슬라이드입니다.',
              },
              {
                image: 'https://picsum.photos/seed/slide2/1200/600',
                title: 'Slide 2',
                description: '이미지 위에 제목과 설명이 함께 표시됩니다.',
              },
              {
                image: 'https://picsum.photos/seed/slide3/1200/600',
                title: 'Slide 3',
                description: '스와이프하거나 화살표로 다음 슬라이드를 확인하세요.',
              },
            ]}
          />
        </Box>
      </div>
      <div className="sect">
        <h3>이미지 + 영상 혼합 슬라이더</h3>
        <Box>
          <MediaSwiper
            slides={[
              {
                type: 'image',
                src: 'https://picsum.photos/seed/media1/1200/600',
                title: 'Image Slide',
                description: '이미지는 5초 후 다음 슬라이드로 넘어갑니다.',
              },
              {
                type: 'video',
                src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                title: 'Video Slide',
                description: '영상은 재생이 끝나면 다음 슬라이드로 넘어갑니다.',
              },
              {
                type: 'image',
                src: 'https://picsum.photos/seed/media3/1200/600',
                title: 'Image Slide',
                description: '하단 원형 프로그레스바로 남은 시간을 확인할 수 있습니다.',
              },
            ]}
          />
        </Box>
      </div>
      <div className="sect">
        <h3>카드 슬라이더</h3>
        <Box>
          <CardSwiper items={cardItems} />
        </Box>
      </div>
    </div>
  )
}

export default SliderPage