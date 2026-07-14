import Accordion from '@/components/Accordion'
import Box from '@/components/Box/Box'

const items = [
  { id: '1', title: '배송은 얼마나 걸리나요?', content: '평균 2~3영업일 이내에 도착합니다.' },
  { id: '2', title: '교환/환불이 가능한가요?', content: '수령 후 7일 이내 미개봉 상품에 한해 가능합니다.' },
  { id: '3', title: '해외 배송도 지원하나요?', content: '현재는 국내 배송만 지원하고 있습니다.' },
//   { id: '4', title: '해외 배송도 지원하나요?', content: '현재는 국내 배송만 지원하고 있습니다.', disabled: true },
]

const AccordionPage = () => {
  return (
    <div>
        <h2>Accordion</h2>
        <div className="sect">
            <h3>default</h3>
            <Box>
                <Accordion items={items} />
            </Box>

            <h3>bordered</h3>
            <Box>
                <Accordion items={items} variant="bordered" />
            </Box>

            <h3>separated</h3>
            <Box>
                <Accordion items={items} variant="separated" />
            </Box>

            <h3>filled</h3>
            <Box>
                <Accordion items={items} variant="filled" />
            </Box>

            <h3>underline</h3>
            <Box>
                <Accordion items={items} variant="underline" />
            </Box>

            <h3>multiple (동시에 여러 개 펼치기)</h3>
            <Box>
                <Accordion items={items} multiple defaultOpenIds={['1', '2']} />
            </Box>
        </div>
    </div>
  )
}

export default AccordionPage
