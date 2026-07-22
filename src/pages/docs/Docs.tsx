
import Box from '@/components/Box'
import usePageTitle from '@/hooks/usePageTitle'

const Docs = () => {
  usePageTitle('Docs - ui-library')

  return (
    <div>
      <h2>Docs</h2>
      <div className="sect">
        <h3>마크업 가이드</h3>
        <Box>
           <a href="/data/guide.html" target="_blank">guide</a>
        </Box>
      </div>
      <div className="sect">
        <h3>마크업 가이드</h3>
        <Box>
           <a href="http://10.10.10.15:34410/uiComponents/" target="_blank">UI 컴포넌트 템플릿 라이브러리</a>
        </Box>
      </div>
      <div className="sect">
        <h3>Markup Checklist</h3>
        <Box>퍼블리셔용 QA </Box>
      </div>
      <div className="sect">
        <h3>Responsive Tester</h3>
        <Box>반응형 확인</Box>
      </div>
      <div className="sect">
        <h3>Accessibility Checker</h3>
        <Box>접근성 확인</Box>
      </div>
      <div className="sect">
        <h3>AI Publisher Assistant</h3>
        <Box></Box>
      </div>
    </div>
  )
}

export default Docs
