
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
    </div>
  )
}

export default Docs
