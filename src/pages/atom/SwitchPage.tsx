import Switch from '@/components/Switch'
import Box from '@/components/Box/Box'

const SwitchPage = () => {
  return (
    <div>
        <h2>Switch</h2>
        <div className="sect">
        <h3>텍스트 포함</h3>
        <Box className="flex-center">
            <Switch label="알림 받기" defaultChecked />
            <Switch label="마케팅 수신 동의" />
        </Box>

        <h3>스위치만</h3>
        <Box className="flex-center">
            <Switch aria-label="알림 받기" defaultChecked />
            <Switch aria-label="마케팅 수신 동의" />
        </Box>

        <h3>size</h3>
        <Box className="flex-center">
            <Switch size="sm" label="Small" defaultChecked />
            <Switch size="md" label="Medium" defaultChecked />
            <Switch size="lg" label="Large" defaultChecked />
        </Box>

        <h3>disabled</h3>
        <Box className="flex-center">
            <Switch label="Disabled" disabled />
            <Switch label="Disabled Checked" disabled defaultChecked />
        </Box>
        </div>
    </div>
  )
}

export default SwitchPage
