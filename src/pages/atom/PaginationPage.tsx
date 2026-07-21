import { useState } from 'react'
import Pagination from '@/components/Pagination'
import Box from '@/components/Box/Box'

const PaginationPage = () => {
  const [defaultPage, setDefaultPage] = useState(1)
  const [outlinePage, setOutlinePage] = useState(4)
  const [roundedPage, setRoundedPage] = useState(1)
  const [textPage, setTextPage] = useState(1)
  const [sizePage, setSizePage] = useState(1)

  return (
    <div>
        <h2>Pagination</h2>
        <div className="sect">
            <h3>default</h3>
            <Box className="flex-center">
                <Pagination currentPage={defaultPage} totalPages={10} onPageChange={setDefaultPage} />
            </Box>

            <h3>outline</h3>
            <Box className="flex-center">
                <Pagination
                    variant="outline"
                    currentPage={outlinePage}
                    totalPages={10}
                    onPageChange={setOutlinePage}
                />
            </Box>

            <h3>rounded</h3>
            <Box className="flex-center">
                <Pagination
                    variant="rounded"
                    currentPage={roundedPage}
                    totalPages={10}
                    onPageChange={setRoundedPage}
                />
            </Box>

            <h3>text</h3>
            <Box className="flex-center">
                <Pagination
                    variant="text"
                    currentPage={textPage}
                    totalPages={10}
                    showEdges={false}
                    onPageChange={setTextPage}
                />
            </Box>

            <h3>size</h3>
            <Box className="flex-center-row">
                <Pagination size="sm" currentPage={sizePage} totalPages={5} onPageChange={setSizePage} /><br />
                <Pagination size="md" currentPage={sizePage} totalPages={5} onPageChange={setSizePage} /><br />
                <Pagination size="lg" currentPage={sizePage} totalPages={5} onPageChange={setSizePage} /><br />
            </Box>
        </div>
    </div>
  )
}

export default PaginationPage
