import Tooltip from '@/components/Tooltip'
import Button from '@/components/Button'
import Icon from '@/components/Icon/Icon'
import Box from '@/components/Box/Box'

const TooltipPage = () => {
  return (
    <div>
        <h2>Tooltip</h2>
        <div className="sect">
            <h3>position</h3>
            <Box className="flex-center">
                <Tooltip content="위쪽 툴팁" position="top">
                    <Button variant="text">Top</Button>
                </Tooltip>
                <Tooltip content="아래쪽 툴팁" position="bottom">
                    <Button variant="text">Bottom</Button>
                </Tooltip>
                <Tooltip content="왼쪽 툴팁" position="left">
                    <Button variant="text">Left</Button>
                </Tooltip>
                <Tooltip content="오른쪽 툴팁" position="right">
                    <Button variant="text">Right</Button>
                </Tooltip>
            </Box>

            <h3>아이콘 트리거</h3>
            <Box className="flex-center">
                <Tooltip content="다운로드">
                    <Button iconOnly variant="text" aria-label="다운로드">
                        <Icon text="" className="icon--download" />
                    </Button>
                </Tooltip>
            </Box>
        </div>
    </div>
  )
}

export default TooltipPage
