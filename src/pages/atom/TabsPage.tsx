import Tabs from '@/components/Tabs'
import Box from '@/components/Box/Box'

const items = [
  { id: 'overview', label: '개요', content: '제품 개요 내용입니다.' },
  { id: 'spec', label: '상세 스펙', content: '상세 스펙 내용입니다.' },
  { id: 'review', label: '리뷰', content: '리뷰 내용입니다.' },
  { id: 'qna', label: 'Q&A', content: '문의 내용입니다.'},
]

const TabsPage = () => {
  return (
    <div>
        <h2>Tabs</h2>
        <div className="sect">
          <h3>default</h3>
          <Box>
              <Tabs items={items} />
          </Box>

          <h3>pill</h3>
          <Box>
              <Tabs items={items} variant="pill" />
          </Box>

          <h3>boxed</h3>
          <Box>
              <Tabs items={items} variant="boxed" />
          </Box>

          <h3>responsive (PC: 일반 탭 / 모바일: select)</h3>
          <Box>
              <Tabs items={items} variant="responsive" />
          </Box>

          <h3>size</h3>
          <Box>
              <Tabs items={items} size="sm" />
          </Box>
          <br />
          <Box>
              <Tabs items={items} size="lg" />
          </Box>
        </div>
    </div>
  )
}

export default TabsPage
