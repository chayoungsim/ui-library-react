import Breadcrumb from '@/components/Breadcrumb'
import Box from '@/components/Box/Box'

const BreadcrumbPage = () => {
  return (
    <div>
        <h2>Breadcrumb</h2>

        <div className="sect">
          <h3>기본</h3>
          <Box>
              <Breadcrumb />
          </Box>

          <h3>separator 커스텀 (&gt;)</h3>
          <Box>
              <Breadcrumb separator=">" />
          </Box>

          <h3>separator 커스텀 (•)</h3>
          <Box>
              <Breadcrumb separator="•" />
          </Box>
        </div>
    </div>
  )
}

export default BreadcrumbPage
