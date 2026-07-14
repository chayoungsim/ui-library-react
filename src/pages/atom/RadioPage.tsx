import Radio from '@/components/Radio'
import Box from '@/components/Box/Box'

const RadioPage = () => {
  return (
    <div>
        <h2>Radio</h2>
        <div className="sect">
            <h3>텍스트 포함</h3>
            <Box className="flex-center">
                <Radio name="text-option" label="옵션 A" value="a" defaultChecked />
                <Radio name="text-option" label="옵션 B" value="b" />
            </Box>

            <h3>라디오만</h3>
            <Box className="flex-center">
                <Radio name="icon-only-option" aria-label="옵션 A" value="a" defaultChecked />
                <Radio name="icon-only-option" aria-label="옵션 B" value="b" />
            </Box>

            <h3>size</h3>
            <Box className="flex-center">
                <Radio name="size-option" size="sm" label="Small" value="sm" />
                <Radio name="size-option" size="md" label="Medium" value="md" defaultChecked />
                <Radio name="size-option" size="lg" label="Large" value="lg" />
            </Box>

            <h3>disabled</h3>
            <Box className="flex-center">
                <Radio name="disabled-option" label="Disabled" disabled />
                <Radio name="disabled-option" label="Disabled Checked" disabled defaultChecked />
            </Box>
        </div>
    </div>
  )
}

export default RadioPage
