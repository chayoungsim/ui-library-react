import Checkbox from '@/components/Checkbox'
import Box from '@/components/Box/Box'

const CheckboxPage = () => {
  return (
    <div>
        <h2>Checkbox</h2>

        <div className="sect">
            <h3>텍스트 포함</h3>
            <Box className="flex-center">
                <Checkbox name="text-option" label="옵션 A" value="a" defaultChecked />
                <Checkbox name="text-option" label="옵션 B" value="b" />
            </Box>

            <h3>체크박스만</h3>
            <Box className="flex-center">
                <Checkbox name="icon-only-option" aria-label="옵션 A" value="a" defaultChecked />
                <Checkbox name="icon-only-option" aria-label="옵션 B" value="b" />
            </Box>

            <h3>size</h3>
            <Box className="flex-center">
                <Checkbox name="size-option" size="sm" label="Small" value="sm" />
                <Checkbox name="size-option" size="md" label="Medium" value="md" defaultChecked />
                <Checkbox name="size-option" size="lg" label="Large" value="lg" />
            </Box>

            <h3>disabled</h3>
            <Box className="flex-center">
                <Checkbox name="disabled-option" label="Disabled" disabled />
                <Checkbox name="disabled-option" label="Disabled Checked" disabled defaultChecked />
            </Box>
        </div>
    </div>
  )
}

export default CheckboxPage
