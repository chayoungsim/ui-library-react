import Button from '@/components/Button/Button'
import Box from '@/components/Box/Box'
import Icon from '@/components/Icon/Icon'

const ButtonType = () => {
  return (
    <div>
        <h2>Button</h2>
        <div className="sect">
            <h3>variant</h3>
            <Box className="flex-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outlined</Button>
                <Button variant="text">Text</Button>
            </Box> 

            <h3>size</h3>
            <Box className="flex-center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </Box>
                
        
            <h3>With Icon</h3>
            <Box className="flex-center">
                <Button startIcon={<span>Start</span>}>Start Icon</Button>
                <Button endIcon={<span>End</span>}>End Icon</Button>
            </Box>

            <h3>Icon Only</h3>
            <Box className="flex-center">
                <Button iconOnly aria-label="다운로드">
                    <Icon text="" className="icon--download" />
                </Button>
                <Button iconOnly variant="outline" size="sm" aria-label="닫기">
                    <Icon text="" className="icon--x" />
                </Button>
            </Box>

            <h3>disabled</h3>
            <Box className="flex-center">
                <Button disabled>Disabled</Button>  
            </Box>        

            <h3>loading</h3>
            <Box className="flex-center">
                <Button loading>Loading</Button>
            </Box>
        
        </div>
    </div>
  )
}

export default ButtonType
