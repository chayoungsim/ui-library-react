import Select from '@/components/Select'
import Box from '@/components/Box/Box'

const SelectPage = () => {
  return (
    <div>
        <h2>Select</h2>
        <div className="sect">
            <h3>기본</h3>
            <Box className="flex-center">
                <Select placeholder="지역을 선택하세요">
                    <option value="seoul">서울</option>
                    <option value="busan">부산</option>
                    <option value="incheon">인천</option>
                </Select>
            </Box>

            <h3>size</h3>
            <Box className="flex-center">
                <Select size="sm" placeholder="Small">
                    <option value="a">옵션 A</option>
                    <option value="b">옵션 B</option>
                </Select>
                <Select size="md" placeholder="Medium">
                    <option value="a">옵션 A</option>
                    <option value="b">옵션 B</option>
                </Select>
                <Select size="lg" placeholder="Large">
                    <option value="a">옵션 A</option>
                    <option value="b">옵션 B</option>
                </Select>
            </Box>

            <h3>disabled</h3>
            <Box className="flex-center">
                <Select placeholder="선택 불가" disabled>
                    <option value="a">옵션 A</option>
                </Select>
            </Box>

            <h3>error</h3>
            <Box className="flex-center">
                <Select placeholder="지역을 선택하세요" error>
                    <option value="a">옵션 A</option>
                </Select>
            </Box>
        </div>
    </div>
  )
}

export default SelectPage
